import * as React from 'react';
import { isLeepYear, fillZero } from '@/utils';
import { Month, FebruaryDays } from '@/utils/types';
import { Wrap, WrapHead, WrapWeekHead, WrapTd } from './styles';

interface ITdProps {
  day: number;
  needHighlight: boolean;
}

class Calendar extends React.Component {
  static readonly WEEK_NAMES = ['日', '一', '二', '三', '四', '五', '六'];
  static readonly MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  static readonly LINES = [0, 1, 2, 3, 4, 5];

  constructor(props: any) {
    super(props);
    this.state = {
      year: 0,
      month: 0
    };
  }

  _getFullYear = (date: Date) => date.getFullYear();

  _getMonth = (date: Date) => date.getMonth();

  setCurrentYearMonth = (date: Date) => {
    this.setState({
      year: this._getFullYear(date),
      month: this._getMonth(date)
    });
  };

  _getMonthDays = (date: Date) => {
    const year = this._getFullYear(date);
    const month = this._getMonth(date);
    if (month === Month.February) {
      return isLeepYear(year) ? FebruaryDays.leepYear : FebruaryDays.commonYear;
    }
    return Calendar.MONTH_DAYS[month];
  };

  getDateByYearMonthDay = (year: number, month: number, day: number = 1): Date => {
    return new Date(year, month, day);
  };

  getWeekOfMonthFirstDay = (year: number, month: number): number => {
    const date = this.getDateByYearMonthDay(year, month);
    return date.getDay();
  };

  _getLastMonthDate = (year: number, month: number): Date => {
    month = month - 1;
    const isBackLastYear = month < Month.January;
    const lastMonth = isBackLastYear ? Month.December : month;
    year = isBackLastYear ? year - 1 : year;
    return new Date(year, lastMonth);
  };

  _getFilledMonthDays = (date: Date) => {
    return new Array(this._getMonthDays(date)).fill(0).map((_, i: number) => i + 1);
  };

  getBeforeDays = (year: number, month: number): number[] => {
    const lastMonthDate = this._getLastMonthDate(year, month);
    const days = this._getFilledMonthDays(lastMonthDate);
    const weekDay = this.getWeekOfMonthFirstDay(year, month);
    return days.slice(days.length - weekDay);
  };

  getAfterDays = (year: number, month: number): number[] => {
    const weekLen = Calendar.WEEK_NAMES.length;
    const lineLen = Calendar.LINES.length;
    const daysSum = weekLen * lineLen;
    const date = this.getDateByYearMonthDay(year, month);
    const monthDays = this._getMonthDays(date);
    const beforeDays = this.getBeforeDays(year, month);
    const afterDays = daysSum - beforeDays.length - monthDays;
    return new Array(afterDays).fill(0).map((_, i: number) => i + 1);
  };

  getRenderDays = (year: number, month: number): ITdProps[] => {
    const formatTdItem = (days: number[], needHighlight: boolean = false) =>
      days.map(day => ({ day, needHighlight }));
    const beforeDays = formatTdItem(this.getBeforeDays(year, month));
    const afterDays = formatTdItem(this.getAfterDays(year, month));
    const date = this.getDateByYearMonthDay(year, month);
    const monthDays = formatTdItem(this._getFilledMonthDays(date), true);
    const days = beforeDays.concat(monthDays, afterDays);
    return days;
  };

  renderTableHead = () => {
    return (
      <thead>
        <WrapWeekHead>
          {Calendar.WEEK_NAMES.map((week: string, i: number) => {
            return <td key={i}>{week}</td>;
          })}
        </WrapWeekHead>
      </thead>
    );
  };

  renderTableBody = () => {
    const days = this.getRenderDays(2020, 6);

    const renderTd = (line: number) => {
      const weekLen = Calendar.WEEK_NAMES.length;
      const startIndex = line * weekLen;
      const endIndex = startIndex + weekLen;
      return days.slice(startIndex, endIndex).map((item, i) => (
        <WrapTd className={item.needHighlight ? '' : 'grey'} key={i}>
          {fillZero(item.day)}
        </WrapTd>
      ));
    };

    return (
      <tbody>
        {Calendar.LINES.map((line: number) => {
          return <tr key={line}>{renderTd(line)}</tr>;
        })}
      </tbody>
    );
  };

  renderCalendar = () => {
    return (
      <Wrap>
        <WrapHead>2020年06月</WrapHead>
        <table className="table">
          {this.renderTableHead()}
          {this.renderTableBody()}
        </table>
      </Wrap>
    );
  };

  render() {
    return <div>{this.renderCalendar()}</div>;
  }
}

export default Calendar;
