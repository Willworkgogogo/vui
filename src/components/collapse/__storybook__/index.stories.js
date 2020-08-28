import * as React from 'react';
import Collapse from '../index';

export default {
  title: '数据展示/Collapse 折叠面板',
  component: Collapse,
  parameters: {
    componentSubtitle: '可以折叠/展开的内容区域'
  }
};

const text = `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
found as a welcome guest in many households across the world.`;

export const 普通 = () => (
  <Collapse onChange={console.log} defaultActiveKey={['1']}>
    <Collapse.Panel header="this is panel header 1" key="1">
      {text}
    </Collapse.Panel>
    <Collapse.Panel header="this is panel header 2" key="2">
      {text}
    </Collapse.Panel>
    <Collapse.Panel header="this is panel header 3" key="3" disabled>
      {text}
    </Collapse.Panel>
  </Collapse>
);

export const 手风琴 = () => (
  <Collapse onChange={console.log} accordion defaultActiveKey="1">
    <Collapse.Panel header="this is panel header 1" key="1">
      {text}
    </Collapse.Panel>
    <Collapse.Panel header="this is panel header 2" key="2">
      {text}
    </Collapse.Panel>
    <Collapse.Panel header="this is panel header 3" key="3">
      {text}
    </Collapse.Panel>
  </Collapse>
);

export const 简洁风格 = () => (
  <Collapse onChange={console.log} bordered={false}>
    <Collapse.Panel header="this is panel header 1" key="1">
      {text}
    </Collapse.Panel>
    <Collapse.Panel header="this is panel header 2" key="2">
      {text}
    </Collapse.Panel>
    <Collapse.Panel header="this is panel header 3" key="3">
      {text}
    </Collapse.Panel>
  </Collapse>
);
