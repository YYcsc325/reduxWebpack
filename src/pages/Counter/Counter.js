import React, { Component } from 'react';
import { increment, decrement, reset } from '../../redux/actions/couter';
import { connect } from 'react-redux';
// 使Counter能获得到Redux的state，并且能发射action。先来安装react-redux

class Counter extends Component {
  render() {
    const {
      counter: { count },
      increment,
      decrement,
      reset,
    } = this.props;
    return (
      <div>
        <div>
          当前计数为:
          {count}
        </div>
        <button onClick={() => increment()}>自增</button>
        <button onClick={() => decrement()}>自减</button>
        <button onClick={() => reset()}>重置</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.couter,
  };
};
const mapDispatchToProps = (dispatch) => {
    return {
      increment: () => {
        dispatch(increment());
      },
      decrement: () => {
        dispatch(decrement());
      },
      reset: () => {
        dispatch(reset());
      },
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Counter);