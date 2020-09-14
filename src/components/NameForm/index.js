import { connect } from "react-redux";
import NameForm from "./NameForm";
import { postPlayers } from "../../data/actions/api";

const mapStateToProps = (state) => {
  return {
    player1: state.player1,
    player2: state.player2,
    player3: state.player3,
    player4: state.player4,
  };
};
const mapDispatchToProps = ({ dispatch }) => {
  return {
    handleSave: (players) => dispatch(postPlayers(players)),
  };
};
export default connect(mapDispatchToProps, mapStateToProps)(NameForm);
