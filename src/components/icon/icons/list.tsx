import * as React from 'react';
import SvgIcon, { ISvgIconProps } from './util';

export default function List(props: ISvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M128 256h64V192H128zM320 256h576V192H320zM128 544h64v-64H128zM320 544h576v-64H320zM128 832h64v-64H128zM320 832h576v-64H320z"></path>
    </SvgIcon>
  );
}
