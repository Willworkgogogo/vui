import * as React from 'react';
import Panel from './Panel';
import { CollapseWrap } from './styles/index';

export interface ICollapseProps {
  /* 当前激活面板的key */
  activeKeys?: string[] | string | number[] | number;
  /* 默认激活面板的key */
  defaultActiveKeys?: string[] | string | number[] | number;
  /* 手风琴模式 */
  accordion?: boolean;
  /* 切换面板的回调 */
  onChange?: Function;
}

interface ICollapseState {
  activeKeys: string[];
}

class Collapse extends React.Component<ICollapseProps> {
  public static Panel = Panel;
  public static defaultProps: ICollapseProps = {
    accordion: false
  };

  componentDidMount() {}

  isValidChildren = (children: React.ReactNode) => {
    // TODO 子元素必须是Panel实例， 或者Collapse（嵌套结构）
    return true;
  };

  render() {
    return <CollapseWrap>{this.props.children}</CollapseWrap>;
  }
}

export default Collapse;
