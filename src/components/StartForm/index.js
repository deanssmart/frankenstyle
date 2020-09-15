import { connect } from 'react-redux';
import StartForm from './StartForm';
import { postNewGame } from '../../data/actions/api';

const mapStateToProps = ({
    player1Name, 
    player2Name,
    player3Name,
    player4Name, 
}) => {
    return {
        player1Name, 
        player2Name,
        player3Name,
        player4Name,
    };
};

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