import { connect } from 'react-redux';
import SketchPad from './SketchPad';
import { postSketch } from '../../data/actions/api';

const mapDispatchToProps = (dispatch) => ({
    handleSave: (dataURL) => dispatch(postSketch(dataURL)),
});

export default connect(null, mapDispatchToProps)(SketchPad);