import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MyComponent extends Component {
  static defaultProps = {
    name: '기본 이름',
  };
  static propTypes = {
    name: PropTypes.string,
    children: PropTypes.number.isRequired,
  };
  render() {
    const { name, children } = this.props;
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다.
        <br />
        children 값은 {children}입니다.
      </div>
    );
  }
}
