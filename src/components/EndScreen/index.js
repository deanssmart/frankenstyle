import { connect } from "react-redux";
import EndScreen from "./EndScreen";
import { reset } from "../../data/actions/state";

const mapStateToProps = ({ roundInput }) => ({ roundInput });
const mapDispatchToProps = (dispatch) => {
  return {
    handleReset: () => console.log(reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EndScreen);
