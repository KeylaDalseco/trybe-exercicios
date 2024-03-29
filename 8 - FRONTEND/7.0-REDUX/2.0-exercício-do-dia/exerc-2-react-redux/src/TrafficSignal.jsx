import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import { changeSignal } from './redux/actions';

const renderSignal = (signalColor) => {
  switch (signalColor) {
  case 'red':
    return redSignal;
  case 'green':
    return greenSignal;
  case 'yellow':
    return yellowSignal;
  default:
    return null;
  }
};

class TrafficSignal extends React.Component {
  render() {
    const { signalColor, dispatch } = this.props;
    return (
      <div>
        <div className="button-container">
          <button
            onClick={ () => dispatch(changeSignal('red')) }
            type="button"
          >
            Red
          </button>
          <button
            onClick={ () => dispatch(changeSignal('yellow')) }
            type="button"
          >
            Yellow
          </button>
          <button
            onClick={ () => dispatch(changeSignal('green')) }
            type="button"
          >
            Green
          </button>
        </div>
        <img className="signal" src={ renderSignal(signalColor) } alt="" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  signalColor: state.color,
});

TrafficSignal.propTypes = {
  signalColor: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(TrafficSignal);
