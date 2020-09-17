import { connect } from 'react-redux';
import ReadyPage from './ReadyPage';
import { playerReady } from '../../data/actions/state';

const mapStateToProps = ({ players, round, ready }) => ({ players, round, ready });

const mapDispatchToProps = dispatch => {
    return {
        handleReady: (ready) => dispatch(playerReady(ready))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadyPage);