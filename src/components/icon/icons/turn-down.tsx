import * as React from 'react';
import SvgIcon, { ISvgIconProps } from './util';

export default function TurnDown(props: ISvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M768 384l-256 256-256-256z"></path>
    </SvgIcon>
  );
}
