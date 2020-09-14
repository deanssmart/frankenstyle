import { connect } from "react-redux";
import Button from "./Button";
import { save } from "../../data/actions";

const mapDispatchToProps = ({ dispatch }) => {
  return {
    handleSubmit: (value) => dispatch(handleSave(value)),
  };
};

export default connect(null, mapDispatchToProps)(Button);
