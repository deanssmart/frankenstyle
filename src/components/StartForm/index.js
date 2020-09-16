import { connect } from 'react-redux';
import StartForm from './StartForm';
import { postNewGame } from '../../data/actions/api';

const mapStateToProps = ({ started }) => ({ started });

const mapDispatchToProps = dispatch => {
    return {
        handleSave: (
            player1Name, 
            player2Name,
            player3Name,
            player4Name,   
            ) => dispatch(postNewGame(
                player1Name, 
                player2Name,
                player3Name,
                player4Name,         
                ))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartForm);