import { Footer } from "../components/Footer";
import { IndividualVisualization } from "./IndividualVisualization";

export const Municipal: React.FC = () => {
  const url =
    "https://public.tableau.com/views/ofSD-CarlsbadHousingPermitsfrom2010-2022/Sheet1?:language=en-US&:display_count=n&:origin=viz_share_link";
  return (
    <>
      <IndividualVisualization url={url} csvlink={"https://www.google.com"} />
      <Footer />
    </>
  );
};
