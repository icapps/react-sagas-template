import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as jokesActions from '../../modules/jokes/actions';
import NavBar from '../../components/navbar/NavBar';
import Button from '../../components/button/Button';

import './jokes.scss';

class Jokes extends Component {
  render() {
    return (
      <div className='app'>
        <NavBar username={this.props.username} />

        <p className='app-jokes'>
          <Button theme='secondary' onClickCallback={this.props.dispatchers.getJoke}>Tell me a joke!</Button>
        </p>
        {!this.props.error && (
        <p className='app-joke'>
          {this.props.joke || 'Waiting for a joke 💩'}
        </p>)}

        {this.props.error && (
          <p className='app-joke-error'>
            {this.props.errorMsg}
          </p>)}

          <p className='back-home'>
            <Button link='/'>Take me home</Button>
          </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    joke: state.jokes.joke,
    error: state.jokes.error,
    errorMsg: state.jokes.errorMsg
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchers: {
      getJoke: () => dispatch(jokesActions.getJokeRequest())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Jokes);
