import styled from 'styled-components';
import { themeConfig } from '@/theme';

interface IWrap {
  fullscreen?: boolean;
}

const CalendarHeadHeight = 40;

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
  text-align: center;
  border-radius: 5px 5px 0 0;
  color: ${themeConfig.white};
  background-color: ${themeConfig.blue};
  .ml20 {
    margin-left: 20px;
    cursor: pointer;
    outline: none;
  }
  .mr20 {
    margin-right: 20px;
    cursor: pointer;
    outline: none;
  }
`;

export const WrapWeekHead = styled.tr`
  text-align: center;
  color: ${themeConfig.fontBlack};
`;

export const WrapTd = styled.td`
  padding: 4px;
  color: ${themeConfig.fontBlack};
  text-align: center;
  cursor: pointer;
  outline: none;
  &.grey {
    color: ${themeConfig.grey};
  }
  &.active span {
    color: ${themeConfig.white};
    background-color: ${themeConfig.blue};
  }
  span {
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    &:hover {
      color: ${themeConfig.white};
      background-color: ${themeConfig.blue};
    }
  }
`;
