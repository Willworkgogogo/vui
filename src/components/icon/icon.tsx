import * as React from 'react';
import { IconWrap } from './styles';

interface IIconProps {
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

class Icon extends React.Component<IIconProps> {
  render() {
    const { type, width, height, color } = this.props;
    return (
      <IconWrap aria-hidden="true" xmlns="http://www.w3.org/2000/svg" focusable="false" role="presentation" width={width} height={height} fill={color}>
        {type && require(`../../icons/svg/${type}.svg`)}
      </IconWrap>
    );
  }
}

export default Icon;
