import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = ({ round }) => ({ round });

export default connect(mapStateToProps)(App);