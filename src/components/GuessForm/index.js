import { connect } from 'react-redux';
import GuessForm from './GuessForm';
import { postGuess } from '../../data/actions/api';

const mapStateToProps = ({ players, round, roundInputs }) => ({ players, round, roundInputs });

const mapDispatchToProps = dispatch => {
    return {
        handleGuess: (round, guess) => dispatch(postGuess(round, guess)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GuessForm);