import * as React from 'react';
import { IIconProps } from '../icon';

export type ISvgIconProps = Omit<IIconProps, 'type'>;

export default class SvgIcon extends React.Component<ISvgIconProps> {
  render() {
    const { width = '20', height = '20', color = '#181818', children } = this.props;
    return (
      <svg
        viewBox="0 0 1024 1024"
        width={width}
        height={height}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        {React.Children.map(children, (child: React.ReactElement) => {
          return React.cloneElement(child, { ...child.props, fill: color });
        })}
      </svg>
    );
  }
}
