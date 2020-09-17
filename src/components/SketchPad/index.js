import { connect } from 'react-redux';
import SketchPad from './SketchPad';
import { postSketch } from '../../data/actions/api';

const mapStateToProps = ({ word, round, roundInputs, players }) => ({ word, round, roundInputs, players });

const mapDispatchToProps = dispatch => {
    return {
        handleSave: (round, imageData) => dispatch(postSketch(round, imageData)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SketchPad);