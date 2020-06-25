import * as React from 'react';

export interface IPanelProps {
  /* 标题 */
  header?: React.ReactNode;
}

class Panel extends React.Component<IPanelProps> {
  render() {
    const { header, children } = this.props;
    return (
      <div>
        <div className="header">{header}</div>
        <div className="body">{children}</div>
      </div>
    );
  }
}

export default Panel;
