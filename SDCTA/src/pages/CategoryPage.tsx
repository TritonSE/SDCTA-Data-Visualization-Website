import { Footer } from '../components/Footer';
import TableauEmbed from '../components/TableauEmbed';
import { useDispatch, useSelector } from "react-redux";
import { loadCategory, getCategoryValue, changeCategory } from "../slices/categorySlice";
import { Visualization } from '../api/data';
import { RootState } from '../app/store';
import { CategoryType } from "../slices/categorySlice";
import { useEffect } from 'react';
import { useAppSelector } from "../app/hooks";
import "./Pages.css";
const downloadIcon = "./Images/Icon.png";


interface CategoryPageProps {
    category: CategoryType;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => {
    const dispatch = useDispatch();
    const currCategory = useAppSelector(getCategoryValue)[category]
    useEffect(() => {
        if (currCategory === null) {
            dispatch(loadCategory(category));
        } else {
            dispatch(changeCategory(category))
        }
    }, [category]);

    const vizs = currCategory?.visualizations ?? [];
    return (
        <>
            <div className="heading">{category}</div>
            {vizs?.map((viz: Visualization) => (
                <>
                    <div className="top-row">
                        <div className="subheading">{viz.title}</div>

                        <div className="download-button">
                            Download <img src={downloadIcon} alt="download icon" />
                        </div>
                    </div>
                    <div onClick={() => console.log("HERE")}>
                        <TableauEmbed
                            url={
                                viz.link
                            }
                        />
                    </div>
                    <div className="description">
                        {viz.analysis}
                    </div>
                    <div className="learn-more"> Learn more</div>
                </>
            ))}
            <Footer />
        </>
    );
};