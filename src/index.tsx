import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { themeConfig } from './theme';
import Collapse from './components/collapse';
import Icon from './components/icon';

const H = () => (
  <ThemeProvider theme={themeConfig}>
    <Collapse onChange={console.log} forceRender>
      <Collapse.Panel header="标题1" key="1">
        11111
      </Collapse.Panel>
      <Collapse.Panel header="标题2" key="2">
        22222
      </Collapse.Panel>
    </Collapse>
    <Icon type="arrow-up" />
    <Icon type="arrow-right" />
    <Icon type="arrow-down" />
    <Icon type="arrow-left" />
    <Icon type="benefits" />
    <Icon type="list" />
    <Icon type="lock" />
    <Icon type="turn-left" />
    <Icon type="turn-right" />
    <Icon type="turn-top" />
    <Icon type="turn-down" />
    <Icon type="search" />
    <Icon type="setting" />
  </ThemeProvider>
);

ReactDOM.render(<H />, document.getElementById('root'));
