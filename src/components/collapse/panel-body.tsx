import * as React from 'react';
import { PanelBody as PanelBodyWrap } from './styles/index';
import classnames from 'classnames';

interface IPanelBodyProps {
  /* 是否激活 */
  isActive: boolean;
  /* 首次渲染时强制渲染 */
  forceRender?: boolean;
  /* 卸载未激活的内容 */
  destroyInactivePanel?: boolean;
}

class PanelBody extends React.Component<IPanelBodyProps> {
  private _isActive: boolean;

  render() {
    const { isActive, forceRender = false, destroyInactivePanel = false, children } = this.props;
    /**
     * 只要forceRender 则直接下一步
     * panel激活一次后就已标记，之后无关isActive,
     */
    this._isActive = forceRender || this._isActive || isActive;
    if (!this._isActive) {
      return null;
    }

    const contentClassname = classnames('content', {
      inactive: !isActive
    });
    /**
     * forceRender优先级高于destroyInactivePanel, 标记了forceRender, 则panel不会被销毁
     */
    const child = !forceRender && !isActive && destroyInactivePanel ? null : children;
    return <PanelBodyWrap className={contentClassname}>{child}</PanelBodyWrap>;
  }
}

export default PanelBody;
