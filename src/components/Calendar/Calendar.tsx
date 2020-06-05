import * as React from 'react';
import classnames from 'classnames';
import { isLeepYear, fillZero } from '@/utils';
import { Month, FebruaryDays } from '@/utils/types';
import { Const } from '@/utils/const';
import { Wrap, WrapHead, WrapWeekHead, WrapTd } from './styles';

type monthType = 'pre' | 'current' | 'next';
type directionType = 'pre' | 'next';

interface ITdProps {
  day: number;
  monthType: monthType;
}

interface ICalendarProps {
  /* 日期选中后的回调 */
  onSelect?: (date: Date) => void;
}

interface ICalendarState {
  year: number;
  month: number;
  day: number;
}

class Calendar extends React.Component<ICalendarProps, ICalendarState> {
  static readonly WEEK_NAMES = ['日', '一', '二', '三', '四', '五', '六'];
  static readonly MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  static readonly LINES = [0, 1, 2, 3, 4, 5];

  constructor(props: ICalendarProps) {
    super(props);
    const date = new Date();
    this.state = {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate()
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

  getRenderFullDays = (year: number, month: number): ITdProps[] => {
    const formatTdItem = (days: number[], monthType: monthType) =>
      days.map(day => ({ day, monthType }));
    const beforeDays = formatTdItem(this.getBeforeDays(year, month), 'pre');
    const afterDays = formatTdItem(this.getAfterDays(year, month), 'next');
    const date = this.getDateByYearMonthDay(year, month);
    const monthDays = formatTdItem(this._getFilledMonthDays(date), 'current');
    const days = beforeDays.concat(monthDays, afterDays);
    return days;
  };

  onDaySelect = (day: number, monthType: monthType) => {
    const { year, month } = this.state;
    console.log(day, monthType);
    this.setState({ day });
    this.props.onSelect && this.props.onSelect(new Date());
  };

  onChangeYear = (direction: directionType) => {
    let { year } = this.state;
    if (direction === 'next') {
      year += 1;
    } else {
      year -= 1;
    }
    this.setState({ year });
  };

  onChangeMonth = (direction: directionType) => {
    let { month } = this.state;
    if (direction === 'next') {
      month === Month.December ? (month = Month.January) : (month += 1);
    } else {
      month === Month.January ? (month = Month.December) : (month -= 1);
    }
    this.setState({ month });
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
    const { year, month } = this.state;
    const days = this.getRenderFullDays(year, month);
    const renderTd = (line: number) => {
      const weekLen = Calendar.WEEK_NAMES.length;
      const startIndex = line * weekLen;
      const endIndex = startIndex + weekLen;
      return days.slice(startIndex, endIndex).map((item, i) => {
        const isCurrentMonthDay = item.monthType === 'current';
        const classname = classnames({
          grey: !isCurrentMonthDay
        });
        return (
          <WrapTd
            onClick={() => this.onDaySelect(item.day, item.monthType)}
            className={classname}
            key={i}
          >
            <span>{fillZero(item.day)}</span>
          </WrapTd>
        );
      });
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
    const { year, month } = this.state;
    return (
      <Wrap>
        <WrapHead>
          <div>
            <span className="mr20" onClick={() => this.onChangeYear('pre')}>
              《
            </span>
            <span className="mr20" onClick={() => this.onChangeMonth('pre')}>
              {'<'}
            </span>
            <span>
              {year}年{fillZero(month + 1)}月
            </span>
            <span className="ml20" onClick={() => this.onChangeMonth('next')}>
              {'>'}
            </span>
            <span className="ml20" onClick={() => this.onChangeYear('next')}>
              》
            </span>
          </div>
        </WrapHead>
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
