import { connect } from 'react-redux';
import SketchPad from './SketchPad';
import { postRound } from '../../data/actions/api';

const mapStateToProps = ({ round }) => ({ round });

const mapDispatchToProps = dispatch => {
    return {
        handleSave: (round, roundInput) => dispatch(postRound(round, roundInput)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SketchPad);