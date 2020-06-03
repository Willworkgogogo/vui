import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { themeConfig } from './theme';
import Badge from './components/Badge';

const H = () => (
  <ThemeProvider theme={themeConfig}>
    <Badge dot style={{ marginRight: 20 }}>
      测试一下
    </Badge>
    <Badge count={0} style={{ marginRight: 20 }}>
      测试一下
    </Badge>
    <Badge count={12} style={{ marginRight: 20 }}>
      测试一下
    </Badge>
    <Badge count={12} color="blue">
      测试一下
    </Badge>
  </ThemeProvider>
);

ReactDOM.render(<H />, document.getElementById('root'));
