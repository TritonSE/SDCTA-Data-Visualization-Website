import { Footer } from "../components/Footer";
import TableauEmbed from "../components/TableauEmbed";
import { useDispatch } from "react-redux";
import {
  loadCategory,
  getCategoryValue,
  changeCategory,
  type CategoryType,
} from "../slices/categorySlice";
import { type Visualization } from "../api/data";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppSelector } from "../app/hooks";
import "./CategoryPage.css";

interface CategoryPageProps {
  category: CategoryType;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  category,
}: CategoryPageProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currCategory = useAppSelector(getCategoryValue)[category];
  useEffect(() => {
    if (currCategory === null) {
      dispatch(loadCategory(category));
    } else {
      dispatch(changeCategory(category));
    }
  }, [category]);

  const navigateToViz = (title: string): void => {
    navigate({
      pathname: "/IndividualVisualization",
      search: `?title=${encodeURIComponent(title)}`,
    });
  };
  const vizs = currCategory?.visualizations ?? [];
  return (
    <>
      <div className="heading">{category}</div>
      {vizs?.map((viz: Visualization) => (
        <div key={viz.title}>
          <div className="top-row">
            <div className="subheading">{viz.title}</div>

            {/* <div className="download-button">
                            Download <img src={downloadIcon} alt="download icon" />
                        </div> */}
          </div>
          <div
            onClick={() => {
              navigateToViz(viz.title);
            }}
          >
            <TableauEmbed url={viz.link} interactive={false} key={viz.title} />
          </div>
          <div className="description">{viz.analysis}</div>
          <div
            onClick={() => {
              navigateToViz(viz.title);
            }}
            className="learn-more"
          >
            {" "}
            Learn more
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
};
