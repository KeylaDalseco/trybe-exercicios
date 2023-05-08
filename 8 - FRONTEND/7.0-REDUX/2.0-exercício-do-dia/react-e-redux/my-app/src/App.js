import React from 'react'
import { connect } from 'react-redux';
import { actionCreator } from './redux/actions/actionCreator';
import { clicksCount } from './redux/actions/actionCreator';

class App extends React.Component{
  render() {
    const { countState, dispatch, clickState} = this.props;

    const dispatchAll = (add = 1) => {
      dispatch(actionCreator(add));
      dispatch(clicksCount(add));
    };

    return(
      <div>
        <h1>Contador</h1>
        <h2>{ countState }</h2>
        <button onClick={ () => dispatchAll() }>Incrementar 1</button>
        <button onClick={ () => dispatchAll(5) }>Incrementa 5</button>
        <h3>Número de clicks: { clickState }</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  countState: state.counterReducer.count,
  clickState: state.counterReducer.click,
})

export default connect(mapStateToProps)(App);
