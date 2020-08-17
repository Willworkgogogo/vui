import * as React from 'react';
import { PanelWrap, PanelHeader, PanelBody } from './styles/index';

import classnames from 'classnames';

export interface IPanelProps {
  /* 标题 */
  header?: React.ReactNode;
  /* 对应activeKey */
  key: string | number;
  /* 是否显示箭头 */
  showArrow?: boolean;
  /* 处理点击事件 */
  onItemClick?: (key: string) => void;
  /* key */
  panelKey?: string;
  /* 是否是激活状态 */
  isActive?: boolean;
}

class Panel extends React.Component<IPanelProps> {
  onClick = (key: string) => {
    this.props.onItemClick && this.props.onItemClick(key);
  };

  render() {
    const { header, children, showArrow = true, panelKey, isActive = false } = this.props;
    console.log('Panel -> render -> panelKey', panelKey);
    const headerClassname = classnames({
      'hide-arrow': !showArrow
    });
    const contentClassname = classnames('content', {
      inactive: !isActive
    });

    return (
      <PanelWrap>
        <PanelHeader className={headerClassname} onClick={() => this.onClick(panelKey)}>
          {header}
        </PanelHeader>
        <PanelBody className={contentClassname}>{children}</PanelBody>
      </PanelWrap>
    );
  }
}

export default Panel;
