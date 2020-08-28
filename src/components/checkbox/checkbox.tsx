import * as React from 'react';

export interface ICheckboxProps {}

class Checkbox extends React.Component<ICheckboxProps> {
  render() {
    const { children } = this.props;
    return (
      <label>
        <input type="checkbox" />
        <span>{children}</span>
      </label>
    );
  }
}

export default Checkbox;
