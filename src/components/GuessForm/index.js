import { connect } from 'react-redux';
import GuessForm from './GuessForm';
import { postRound } from '../../data/actions/api';

const mapStateToProps = ({ round, roundInput }) => ({ round, roundInput });

const mapDispatchToProps = dispatch => {
    return {
        handleGuess: (round, roundInput) => dispatch(postRound(round, roundInput)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GuessForm);