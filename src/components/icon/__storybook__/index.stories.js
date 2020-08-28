import * as React from 'react';
import Icon from '../index';

export default {
  title: '通用/Icon 图标',
  component: Icon,
  parameters: {
    componentSubtitle: '语义化的矢量图形',
  },
};

export const 普通 = () => (
  <>
    <Icon type="arrow-up" />
    <Icon type="arrow-right" />
    <Icon type="arrow-down" />
    <Icon type="arrow-left" />
    <Icon type="lock" />
    <Icon type="unlock" />
    <Icon type="lock" />
    <Icon type="turn-left" />
    <Icon type="turn-right" />
    <Icon type="turn-top" />
    <Icon type="turn-down" />
    <Icon type="search" />
    <Icon type="setting" />
  </>
);

export const 修改属性 = () => <Icon type="benefits" width="40" height="40" color="green" />;
