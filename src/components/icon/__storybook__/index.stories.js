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
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {[
        'arrow-up',
        'arrow-right',
        'arrow-down',
        'arrow-left',
        'lock',
        'unlock',
        'turn-left',
        'turn-right',
        'turn-down',
        'turn-top',
        'search',
        'setting',
      ].map((type) => (
        <div
          style={{
            flex: '90px 0 0',
            marginRight: 10,
            marginBottom: 10,
            padding: 10,
            textAlign: 'center',
            backgroundColor: '#ddd',
            borderRadius: 5,
          }}
        >
          <Icon type={type} />
          <br />
          <code>{type}</code>
        </div>
      ))}
    </div>
  </>
);

export const 修改属性 = () => <Icon type="benefits" width="40" height="40" color="green" />;
