import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { themeConfig } from './theme';
import Checkbox from './components/checkbox'

const H = () => (
  <ThemeProvider theme={themeConfig}>
    <Checkbox>123</Checkbox>
  </ThemeProvider>
);

ReactDOM.render(<H />, document.getElementById('root'));
