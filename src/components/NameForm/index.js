import { connect } from "react-redux";
import NameForm from "./NameForm";
import { postPlayers } from "../../data/actions/api";

const mapStateToProps = (state) => {
  return {
    players: state.players,
  };
};
const mapDispatchToProps = ({ dispatch }) => {
  return {
    handleSave: (players) => dispatch(postPlayers(players)),
  };
};
export default connect(mapDispatchToProps, mapStateToProps)(NameForm);
