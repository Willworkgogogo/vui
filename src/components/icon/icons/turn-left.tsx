import * as React from 'react';
import SvgIcon, { ISvgIconProps } from './util';

export default function TurnLeft(props: ISvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M640 768l-256-256 256-256z"></path>
    </SvgIcon>
  );
}
