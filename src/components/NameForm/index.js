import { connect } from "react-redux";
import NameForm from "./NameForm";
import { Form } from "../../data/actions";

const mapStateToProps = ({ playerName }) => {
  return {
    playerName: playerName,
  };

export default connect(mapStateToProps)(NameForm);
