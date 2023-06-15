import { Footer } from '../components/Footer';
import TableauEmbed from '../components/TableauEmbed';
import { useDispatch } from "react-redux";
import { loadCategory, getCategoryValue, changeCategory } from "../slices/categorySlice";
import { Visualization } from '../api/data';
import { useNavigate } from "react-router-dom";
import { CategoryType } from "../slices/categorySlice";
import { useEffect } from 'react';
import { useAppSelector } from "../app/hooks";
import "./CategoryPage.css";
const downloadIcon = "./Images/Icon.png";


interface CategoryPageProps {
    category: CategoryType;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currCategory = useAppSelector(getCategoryValue)[category]
    useEffect(() => {
        if (currCategory === null) {
            dispatch(loadCategory(category));
        } else {
            dispatch(changeCategory(category))
        }
    }, [category]);

    const navigateToViz = (title: string) => {
        navigate({ pathname: "/IndividualVisualization", search: `?title=${encodeURIComponent(title)}` })
    }

    const vizs = currCategory?.visualizations ?? [];
    return (
        <>
            <div className="heading">{category}</div>
            {vizs?.map((viz: Visualization) => (
                <>
                    <div className="top-row">
                        <div className="subheading">{viz.title}</div>

                        {/* <div className="download-button">
                            Download <img src={downloadIcon} alt="download icon" />
                        </div> */}
                    </div>
                    <div onClick={() => navigateToViz(viz.title)}>
                        <TableauEmbed
                            url={
                                viz.link
                            }
                            interactive={false}
                        />
                    </div>
                    <div className="description">
                        {viz.analysis}
                    </div>
                    <div onClick={() => navigateToViz(viz.title)} className="learn-more"> Learn more</div>
                </>
            ))}
            <Footer />
        </>
    );
};