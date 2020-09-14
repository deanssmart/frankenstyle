import { connect } from "react-redux";
import Button from "./Button";
import { save } from "../../data/actions";

const mapDispatchToProps = ({ dispatch }) => {
  return {
    handleSubmit: (value) => dispatch(save(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
