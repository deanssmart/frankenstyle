import { connect } from "react-redux";
import EndScreen from "./EndScreen";
import { reset } from "../../data/actions/state";

const mapStateToProps = ({ word, image, roundInputs }) => ({ word, image, roundInputs });

const mapDispatchToProps = (dispatch) => {
  return {
    handleReset: () => dispatch(reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EndScreen);
