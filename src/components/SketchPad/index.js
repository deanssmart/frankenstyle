import { connect } from 'react-redux';
import SketchPad from './SketchPad';
import { postSketch } from '../../data/actions/api';

const mapStateToProps = ({ round }) => ({ round });

const mapDispatchToProps = dispatch => {
    return {
        handleSave: (round, dataURL) => dispatch(postSketch(round, dataURL)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SketchPad);