import styled from 'styled-components';
import { themeConfig } from '@/theme/index';

export const CollapseWrap = styled.div`
  box-sizing: border-box;
  font-size: ${themeConfig.font14};
  background-color: ${themeConfig.bgColor};
  border: 1px solid ${themeConfig.borderColor};
  border-bottom: 0;
  border-radius: ${themeConfig.borderRadius};
  &.no-border {
    border: 0;
  }
`;

export const PanelWrap = styled.div`
  width: 100%;
`;

export const PanelHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  white-space: nowrap;
  padding: 12px 16px;
  padding-left: 40px;
  border-bottom: 1px solid ${themeConfig.borderColor};
  transition: all 0.3s;
  cursor: pointer;
  &.hide-arrow {
    padding-left: 16px;
  }
  &.disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
`;

export const PanelBody = styled.div`
  background-color: #ffffff;
  padding: 12px 16px;
  border-bottom: 1px solid ${themeConfig.borderColor};
  &.inactive {
    display: none;
  }
`;
