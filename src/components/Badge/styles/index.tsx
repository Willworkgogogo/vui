import styled from 'styled-components';
import { themeConfig } from '@/theme';

interface IWrapBaseProps {
  noPadding?: boolean;
}

export const Wrap = styled.div`
  position: relative;
  display: inline-block;
`;

const commonStyle = `
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
`;

export const WrapDot = styled.div<IWrapBaseProps>`
  ${commonStyle};
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background-color: ${props => props.color || themeConfig.red};
`;

export const WrapBase = styled.div<IWrapBaseProps>`
  ${commonStyle};
  min-width: 20px;
  line-height: 20px;
  padding: ${props => (props.noPadding ? 0 : '0 6px')};
  border-radius: 10px;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  color: ${themeConfig.white};
  background-color: ${props => props.color || themeConfig.red};
`;
