import * as React from 'react';
import { PanelWrap, PanelHeader, PanelBody } from './styles/index';

export interface IPanelProps {
  /* 标题 */
  header?: React.ReactNode;
  /* 对应activeKey */
  key: string | number;
}

class Panel extends React.Component<IPanelProps> {
  render() {
    const { header, children } = this.props;
    return (
      <PanelWrap>
        <PanelHeader className="header">{header}</PanelHeader>
        <PanelBody className="body">{children}</PanelBody>
      </PanelWrap>
    );
  }
}

export default Panel;
