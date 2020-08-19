import * as React from 'react';
import Calendar from '../index';

export default {
  title: 'Data Show/Calendar 日历',
  component: Calendar,
  parameters: {
    componentSubtitle: '日期选择'
  }
};

export const normal = () => <Calendar onSelect={console.log} />;

export const fullscreen = () => <Calendar fullscreen />;
