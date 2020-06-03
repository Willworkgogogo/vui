import styled from 'styled-components';
import { themeConfig } from '@/theme';

interface IWrap {
  fullscreen?: boolean;
}

const CalendarHeadHeight = 36;

export const Wrap = styled.div<IWrap>`
  width: ${props => (props.fullscreen ? '100%' : '300px')};
  font-size: ${themeConfig.font14};
  background-color: ${themeConfig.white};
  table {
    width: 100%;
    border: 1px solid ${themeConfig.grey};
    border-top: none;
  }
`;

export const WrapHead = styled.div`
  height: ${CalendarHeadHeight}px;
  line-height: ${CalendarHeadHeight}px;
  border-radius: 5px 5px 0 0;
  color: ${themeConfig.white};
  background-color: ${themeConfig.blue};
`;

export const WrapWeekHead = styled.tr`
  text-align: center;
  color: ${themeConfig.fontBlack};
`;

export const WrapTd = styled.td`
  color: ${themeConfig.fontBlack};
  text-align: center;
  cursor: pointer;
  outline: none;
  &:hover {
    color: ${themeConfig.white};
    background-color: ${themeConfig.blue};
  }
  &.grey {
    color: ${themeConfig.grey};
  }
`;
