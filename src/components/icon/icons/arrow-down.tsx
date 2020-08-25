import * as React from 'react';
import SvgIcon, { ISvgIconProps } from './util';

export default function ArrowDown(props: ISvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M512 685.248l-278.624-278.624 45.248-45.248L512 594.752l233.376-233.376 45.248 45.248z"></path>
    </SvgIcon>
  );
}
