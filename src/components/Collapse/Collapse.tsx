import * as React from 'react';
import Panel from './Panel';

class Collapse extends React.Component {
  static Panel = Panel;

  render() {
    return this.props.children;
  }
}

Collapse.Panel = Panel;
export default Collapse;
