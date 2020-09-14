import { connect } from "react-redux";
import Form from "./Form";
import { Form } from "../../data/actions";

const mapStateToProps = ({ playerName }) => {
  return {
    playerName: playerName,
  };

  const mapDispatchToProps = ({ dispatch }) => {
  return { handleSubmit:(value) => dispatch(saveSettings(value) 
}
  }

export default connect(mapStateToProps, mapDispatchToProps)(Form);
