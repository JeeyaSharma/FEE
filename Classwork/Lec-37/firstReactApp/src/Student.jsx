import PropTypes from "prop-types";

function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Author: {props.author}</p>
      {/* <p>Student: {props.isStudent ? "yes" : "no"}</p> */}
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

// Default Props
Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};
export default Student;