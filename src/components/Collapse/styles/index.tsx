import styles from 'styled-components';
import { themeConfig } from '@/theme/index';

export const CollapseWrap = styles.div`
  box-sizing: border-box;
  font-size: ${themeConfig.font14};
  background-color: ${themeConfig.bgColor};
  border: 1px solid ${themeConfig.borderColor};
  border-bottom: 0;
  border-radius: ${themeConfig.borderRadius};
`;

export const PanelWrap = styles.div`
  width: 100%;
`;

export const PanelHeader = styles.div`
  position: relative;
  padding: 12px 16px;
  padding-left: 40px;
  border-bottom: 1px solid ${themeConfig.borderColor};
  transition: all .3s;
  cursor: pointer;
`;

export const PanelBody = styles.div`
  background-color: #ffffff;
  padding: 12px 16px;
  border-bottom: 1px solid ${themeConfig.borderColor};
`;
