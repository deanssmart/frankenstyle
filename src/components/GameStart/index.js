import { connect } from 'react-redux';
import GameStart from './GameStart';
import { startGame } from '../../data/actions/state';

const mapStateToProps = ({ word, image, round }) => ({ word, image, round });

const mapDispatchToProps = dispatch => {
    return {
        handleStart: (round) => dispatch(startGame(round))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameStart);