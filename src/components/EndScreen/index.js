import { connect } from "react-redux";
import EndScreen from "./EndScreen";

const mapStateToProps = ({ roundInput }) => ({ roundInput });

export default connect(mapStateToProps)(EndScreen);
