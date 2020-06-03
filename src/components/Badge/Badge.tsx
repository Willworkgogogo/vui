import * as React from 'react';
import { Wrap, WrapDot, WrapBase } from './styles';
import { themeConfig } from '@/theme';
import * as _ from 'lodash';

interface IBadgeProps {
  /** 定义徽标的颜色 */
  color?: string;
  /** 数字或者自定义内容 */
  count?: React.ReactNode;
  /** 显示红点，不显示数字 */
  dot?: boolean;
  /** 当数值为0时是否显示 */
  showZero?: boolean;
  /** 设置数值显示的上限 */
  overflowCount?: number;
  style?: React.CSSProperties;
}

export class Badge extends React.Component<IBadgeProps> {
  static defaultProps = {
    style: {},
    dot: false,
    showZero: false
  };

  isADigit = () => {
    const { count } = this.props;
    const reg = /^\d$/;
    return reg.test(String(count));
  };

  isZero = () => this.props.count === 0;

  render() {
    const { count, dot, color, style, showZero, overflowCount, children } = this.props;
    const isADigit = this.isADigit();
    const renderContent = () => {
      if (_.isNumber(count) && count > overflowCount) return `${overflowCount}+`;
      return count;
    };
    const renderBadge = () => {
      const Comp = dot ? WrapDot : WrapBase;
      return (
        <Wrap style={style}>
          {children}
          {!showZero && this.isZero() ? null : (
            <Comp color={color} noPadding={isADigit}>
              {renderContent()}
            </Comp>
          )}
        </Wrap>
      );
    };

    return renderBadge();
  }
}

export default Badge;
