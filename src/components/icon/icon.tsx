import * as React from 'react';
import ArrowUp from './icons/arrow-up';
import ArrowRight from './icons/arrow-right';
import ArrowDown from './icons/arrow-down';
import ArrowLeft from './icons/arrow-left';
import Benefits from './icons/benefits';
import List from './icons/list';
import Lock from './icons/lock';
import UnLock from './icons/unlock';
import TurnLeft from './icons/turn-left';
import TurnRight from './icons/turn-right';
import Search from './icons/search';
import Setting from './icons/setting';
import TurnTop from './icons/turn-top';
import TurnDown from './icons/turn-down';

export interface IIconProps {
  /**
   * 图标名称
   */
  type: string;
  /**
   * 宽度
   */
  width?: string;
  /**
   * 高度
   */
  height?: string;
  /**
   * 颜色
   */
  color?: string;
}

const IconMap = new Map<string, Function>();
IconMap.set('arrow-up', ArrowUp);
IconMap.set('arrow-right', ArrowRight);
IconMap.set('arrow-down', ArrowDown);
IconMap.set('arrow-left', ArrowLeft);
IconMap.set('benefits', Benefits);
IconMap.set('list', List);
IconMap.set('lock', Lock);
IconMap.set('unlock', UnLock);
IconMap.set('turn-left', TurnLeft);
IconMap.set('turn-right', TurnRight);
IconMap.set('turn-top', TurnTop);
IconMap.set('turn-down', TurnDown);
IconMap.set('search', Search);
IconMap.set('setting', Setting);

export default class Icon extends React.Component<IIconProps> {
  render() {
    const { type, ...rest } = this.props;
    const Comp = IconMap.get(type);
    return Comp ? <Comp {...rest} /> : null;
  }
}
