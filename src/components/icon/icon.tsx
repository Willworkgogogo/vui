import * as React from 'react';
import { IconWrap } from './styles';

interface IIconProps {
  type: string;
  width?: string;
  height?: string;
  color?: string;
}

class Icon extends React.Component<IIconProps> {
  render() {
    const { type, width, height, color } = this.props;
    return (
      <IconWrap aria-hidden="true">
        <use href={`#icon-${type}`} width={width} height={height} fill={color}></use>
      </IconWrap>
    );
  }
}

export default Icon;
