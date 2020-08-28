import * as React from 'react';
import Badge from '../index.tsx';

export default {
  title: '数据展示/Badge 徽标数',
  component: Badge,
  parameters: {
    componentSubtitle: '图标右上角的圆形徽标数字。'
  }
};

const Block = () => (
  <span
    style={{
      display: 'inline-block',
      width: 30,
      height: 30,
      backgroundColor: '#ddd',
      borderRadius: 4
    }}
  ></span>
);

export const normal = () => (
  <>
    <Badge count={1} style={{ marginRight: 30 }}>
      <Block />
    </Badge>
    <Badge count={11} style={{ marginRight: 30 }}>
      <Block />
    </Badge>
    <Badge count={0} showZero style={{ marginRight: 30 }}>
      <Block />
    </Badge>
    <Badge count={0} style={{ marginRight: 30 }}>
      <Block />
    </Badge>
    <Badge dot>
      <Block />
    </Badge>
  </>
);

export const dot = () => (
  <Badge dot>
    <Block />
  </Badge>
);

export const color = () => (
  <>
    <Badge count={99} color="lightgreen" style={{ marginRight: 30 }}>
      <Block />
    </Badge>
    <Badge count={99} color="lightblue">
      <Block />
    </Badge>
  </>
);

export const overflowCount = () => (
  <>
    <Badge count={1000} overflowCount={99} style={{ marginRight: 30 }}>
      <Block />
    </Badge>
    <Badge count={1000}>
      <Block />
    </Badge>
  </>
);
