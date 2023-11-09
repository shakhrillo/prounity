import { PuCard, PuText } from "react-library";
import "./New-courses.css";

const NewCoursesDetails = () => {
  return (
    <div className="component">
      <div className="component-head">
        <PuText className="component-title">
          <h1>New Courses</h1>
        </PuText>
      </div>
      <div className="new-courses-details-content">
        <PuCard></PuCard>
      </div>
    </div>
  );
};

export default NewCoursesDetails;
