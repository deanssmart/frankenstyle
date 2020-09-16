import { connect } from "react-redux";
import EndScreen from "./EndScreen";
import { reset } from "../../data/actions/state";

const mapStateToProps = ({ roundInputs }) => ({ roundInputs });
const mapDispatchToProps = (dispatch) => {
  return {
    handleReset: () => dispatch(reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EndScreen);
