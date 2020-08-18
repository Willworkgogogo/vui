import * as React from 'react';
import { PanelWrap, PanelHeader } from './styles/index';
import PanelBody from './PanelBody';

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
  /* 是否禁用 */
  disabled?: boolean;
  /* 右上角内容 */
  extra?: React.ReactNode;
  /* 是否默认强制渲染 */
  forceRender?: boolean;
  /* 是否卸载未激活的Panel内容 */
  destroyInactivePanel?: boolean;
}

class Panel extends React.Component<IPanelProps> {
  onClick = (key: string) => {
    if (!this.props.disabled) {
      this.props.onItemClick && this.props.onItemClick(key);
    }
  };

  render() {
    const {
      header,
      children,
      showArrow = true,
      panelKey,
      isActive = false,
      disabled = false,
      extra,
      forceRender,
      destroyInactivePanel
    } = this.props;
    const headerClassname = classnames({
      'hide-arrow': !showArrow,
      disabled: disabled
    });

    return (
      <PanelWrap>
        <PanelHeader className={headerClassname} onClick={() => this.onClick(panelKey)}>
          <span>{header}</span>
          <span>{extra}</span>
        </PanelHeader>
        <PanelBody
          isActive={isActive}
          forceRender={forceRender}
          destroyInactivePanel={destroyInactivePanel}
        >
          {children}
        </PanelBody>
      </PanelWrap>
    );
  }
}

export default Panel;
