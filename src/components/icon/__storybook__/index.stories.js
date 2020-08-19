import * as React from 'react';
import Icon from '../index';

export default {
  title: '通用/Icon 图标',
  component: Icon,
  parameters: {
    componentSubtitle: '语义化的矢量图形'
  }
};

export const 普通 = () => (
  <>
    <Icon type="arrow_up" />
    <Icon type="arrow_right" />
    <Icon type="arrow_down" />
    <Icon type="arrow_left" />
    <Icon type="lock" />
    <Icon type="unlock" />
  </>
);

export const 修改属性 = () => <Icon type="benefits" width="40" height="40" color="red" />;
