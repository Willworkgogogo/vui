import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { themeConfig } from './theme';
import Calendar from './components/Calendar';

const H = () => (
  <ThemeProvider theme={themeConfig}>
    <Calendar />
  </ThemeProvider>
);

ReactDOM.render(<H />, document.getElementById('root'));
