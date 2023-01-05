import React, { Component } from 'react';

export default class ClassState extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       teacher: '이효석',
  //     };
  //   }

  //현재버전
  state = {
    teacher: '이효석',
  };

  render() {
    const { teacher } = this.state; // const teacher = thist.state.teacher;
    return (
      <div>
        <button onClick={() => this.setState({ teacher: 'tetz' })}>
          영어로!
        </button>
        <br />
        <span>{teacher}</span>
      </div>
    );
  }
}
