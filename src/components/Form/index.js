import { connect } from "react-redux";
import Form from "./Form";
import { Form } from "../../data/actions";

const mapStateToProps = ({ playerName }) => {
  return {
    playerName: playerName,
  };
};

export default connect(mapStateToProps)(Form);
