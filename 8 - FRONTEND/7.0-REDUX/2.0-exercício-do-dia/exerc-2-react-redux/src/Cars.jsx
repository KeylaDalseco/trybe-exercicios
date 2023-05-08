import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import moveCar from './redux/actions/index';

class Cars extends React.Component {
  render() {
    const { redCar, blueCar, yellowCar, dispatch } = this.props;

    return (
      <div>
        <div>
          <img
            className={ redCar ? 'car-right' : 'car-left' }
            src={ carRed }
            alt="red car"
          />
          <button
            onClick={ () => dispatch(moveCar('red', !redCar)) }
            type="button"
          >
            move
          </button>
        </div>
        <div>
          <img
            className={ blueCar ? 'car-right' : 'car-left' }
            src={ carBlue }
            alt="blue car"
          />
          <button type="button">move</button>
        </div>
        <div>
          <img
            className={ yellowCar ? 'car-right' : 'car-left' }
            src={ carYellow }
            alt="yellow car"
          />
          <button type="button">move</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

Cars.propTypes = {
  redCar: PropTypes.bool.isRequired,
  blueCar: PropTypes.bool.isRequired,
  yellowCar: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Cars);
