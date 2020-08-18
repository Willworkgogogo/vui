import * as React from 'react';
import Panel from './Panel';
import { CollapseWrap } from './styles/index';

import { getActiveKeys } from './utils';
import { Const } from '@/utils/const';
import classnames from 'classnames';

export interface ICollapseProps {
  /* 当前激活面板的key */
  activeKey?: string[] | string | number[] | number;
  /* 默认激活面板的key */
  defaultActiveKey?: string[] | string | number[] | number;
  /* 手风琴模式 */
  accordion?: boolean;
  /* 切换面板的回调 */
  onChange?: (keys: string[]) => void;
  /* 是否显示边框 */
  bordered?: boolean;
  /* 是否默认强制渲染 */
  forceRender?: boolean;
  /* 是否卸载未激活的Panel内容 */
  destroyInactivePanel?: boolean;
}

interface ICollapseState {
  activeKeys: string[];
}

class Collapse extends React.Component<ICollapseProps, ICollapseState> {
  public static Panel = Panel;
  public static defaultProps: ICollapseProps = {
    accordion: false,
    bordered: true
  };

  constructor(props: ICollapseProps) {
    super(props);
    this.state = {
      activeKeys: []
    };
  }

  componentDidMount() {
    /**
     * handle default activeKeys
     */
    this.setState({ activeKeys: getActiveKeys(this.props.defaultActiveKey) });

    /**
     * handle invalid children
     */
    if (!this.isValidChildren()) {
      throw new Error('the children should be instance of Collapse or Panel');
    }
  }

  componentDidUpdate(prevProps: ICollapseProps) {
    // TODO support activeKeys
  }

  isValidChildren = () => {
    if (
      React.Children.toArray(this.props.children).some(
        (child: any) => ![Collapse, Panel].includes(child.type)
      )
    ) {
      return false;
    }
    return true;
  };

  onItemClick = (key: string) => this.setActiveKey(key);

  setActiveKey = (key: string) => {
    let newActiveKeys = [...this.state.activeKeys];
    const index = newActiveKeys.findIndex(value => value === key);
    if (index >= 0) {
      newActiveKeys.splice(index, 1);
    } else {
      this.props.accordion ? (newActiveKeys = [key]) : newActiveKeys.push(key);
    }
    /**
     * update activeKeys & notice change
     */
    this.setState({ activeKeys: newActiveKeys }, () => this.props?.onChange(newActiveKeys));
  };

  getItems = () => {
    return React.Children.toArray(this.props.children).reduce(
      (pre: React.ReactElement[], child: React.ReactElement) => {
        const key = String(child.key).replace(Const.COMPONENT_KEY_PREFIX, '');
        const props = {
          panelKey: key,
          children: child.props.children,
          onItemClick: this.onItemClick,
          isActive: this.state.activeKeys.includes(key),
          forceRender: this.props.forceRender,
          destroyInactivePanel: this.props.destroyInactivePanel
        };
        pre.push(React.cloneElement(child, props));
        return pre;
      },
      [] as React.ReactElement[]
    );
  };

  render() {
    const { bordered } = this.props;
    const classname = classnames({
      'no-border': !bordered
    });
    return <CollapseWrap className={classname}>{this.getItems()}</CollapseWrap>;
  }
}

export default Collapse;
