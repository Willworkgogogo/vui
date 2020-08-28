import * as React from 'react';
import SvgIcon, { ISvgIconProps } from './util';

export default function TurnRight(props: ISvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M384 256l256 256-256 256z"></path>
    </SvgIcon>
  );
}
