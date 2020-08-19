import * as React from 'react';
import * as moment from 'moment';
import classnames from 'classnames';
import { isLeepYear, fillZero } from '@/utils';
import { Month, FebruaryDays } from '@/utils/types';
import { Wrap, WrapHead, WrapWeekHead, WrapTd } from './styles';

type monthType = 'pre' | 'current' | 'next';
type directionType = 'pre' | 'next';

interface ITdProps {
  day: number;
  monthType: monthType;
}

interface ICalendarProps {
  /**
   * 日期选中后的回调
   */
  onSelect?: (date: string) => void;
  /**
   * 是否全屏显示
   */
  fullscreen?: boolean;
}

interface ICalendarState {
  year: number;
  month: number;
  selectedDate: string;
}

class Calendar extends React.Component<ICalendarProps, ICalendarState> {
  static readonly WEEK_NAMES = ['日', '一', '二', '三', '四', '五', '六'];
  static readonly MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 2月暂定28天，具体使用时会根据平/闰年重新计算天数
  static readonly LINES = [0, 1, 2, 3, 4, 5];
  static readonly FORMAT_DATE = 'M/D/YYYY';

  constructor(props: ICalendarProps) {
    super(props);
    const date = new Date();
    this.state = {
      year: date.getFullYear(),
      month: this._getMonth(date),
      selectedDate: ''
    };
  }

  getDateByYearMonthDay = (year: number, month: number, day: number = 1): Date => {
    return new Date(year, month - 1, day);
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

  _getFullYear = (date: Date) => date.getFullYear();
  _getMonth = (date: Date) => date.getMonth() + 1; // 统一月份以1-12的自然数返回
  _getMonthDays = (date: Date) => {
    const year = this._getFullYear(date);
    const month = this._getMonth(date);
    if (month === Month.February) {
      return isLeepYear(year) ? FebruaryDays.leepYear : FebruaryDays.commonYear;
    }
    return Calendar.MONTH_DAYS[month - 1];
  };
  _getFilledMonthDays = (date: Date) => {
    return new Array(this._getMonthDays(date)).fill(0).map((_, i: number) => i + 1);
  };

  getFillBeforeDays = (year: number, month: number): number[] => {
    const lastMonthDate = this._getLastMonthDate(year, month);
    const days = this._getFilledMonthDays(lastMonthDate);
    const weekDay = this.getWeekOfMonthFirstDay(year, month);
    return days.slice(days.length - weekDay);
  };

  getFillAfterDays = (year: number, month: number): number[] => {
    const weekLen = Calendar.WEEK_NAMES.length;
    const lineLen = Calendar.LINES.length;
    const daysSum = weekLen * lineLen;
    const date = this.getDateByYearMonthDay(year, month);
    const monthDays = this._getMonthDays(date);
    const beforeDays = this.getFillBeforeDays(year, month);
    const afterDays = daysSum - beforeDays.length - monthDays;
    return new Array(afterDays).fill(0).map((_, i: number) => i + 1);
  };

  getRenderFullDays = (year: number, month: number): ITdProps[] => {
    const formatTdItem = (days: number[], monthType: monthType) =>
      days.map(day => ({ day, monthType }));
    const beforeDays = formatTdItem(this.getFillBeforeDays(year, month), 'pre');
    const afterDays = formatTdItem(this.getFillAfterDays(year, month), 'next');
    const date = this.getDateByYearMonthDay(year, month);
    const monthDays = formatTdItem(this._getFilledMonthDays(date), 'current');
    const days = beforeDays.concat(monthDays, afterDays);
    return days;
  };

  onYearChange = (direction: directionType) => {
    let { year } = this.state;
    if (direction === 'next') {
      year += 1;
    } else {
      year -= 1;
    }
    this.setState({ year, selectedDate: '' });
  };

  getYearOnMonthChange = (month: number, direction: directionType): number => {
    let { year } = this.state;
    if (direction === 'next' && month === Month.December) {
      year += 1;
    }
    if (direction === 'pre' && month === Month.January) {
      year -= 1;
    }
    return year;
  };

  onMonthChange = (direction: directionType) => {
    let { month } = this.state;
    const year = this.getYearOnMonthChange(month, direction);
    if (direction === 'next') {
      month === Month.December ? (month = Month.January) : (month += 1);
    } else {
      month === Month.January ? (month = Month.December) : (month -= 1);
    }
    this.setState({ year, month, selectedDate: '' });
  };

  onDaySelect = (day: number, monthType: monthType) => {
    let { year, month } = this.state;
    let selectedDate = '';
    if (monthType === 'current') {
      selectedDate = `${month}/${day}/${year}`;
    }
    if (monthType === 'next') {
      const isLastMonth = month === Month.December;
      isLastMonth ? (month = Month.January) : (month += 1);
      isLastMonth ? (year += 1) : year;
      selectedDate = `${month}/${day}/${year}`;
    }
    if (monthType === 'pre') {
      const isFirstMonth = month === Month.January;
      isFirstMonth ? (month = Month.December) : (month -= 1);
      isFirstMonth ? (year -= 1) : year;
      selectedDate = `${month}/${day}/${year}`;
    }
    this.setState({ year, month, selectedDate });
    this.props.onSelect && this.props.onSelect(selectedDate);
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
    const { year, month, selectedDate } = this.state;
    const days = this.getRenderFullDays(year, month);
    const isToday = (day: number) =>
      `${month}/${day}/${year}` === moment().format(Calendar.FORMAT_DATE);
    const isSelected = (day: number, monthType: monthType) => {
      if (selectedDate && monthType === 'current') {
        return selectedDate === `${month}/${day}/${year}`;
      }
      return false;
    };
    const renderTd = (line: number) => {
      const weekLen = Calendar.WEEK_NAMES.length;
      const startIndex = line * weekLen;
      const endIndex = startIndex + weekLen;
      return days.slice(startIndex, endIndex).map((item, i) => {
        const { day, monthType } = item;
        const isCurrentMonthDay = monthType === 'current';
        const classname = classnames({
          grey: !isCurrentMonthDay,
          active: isToday(day),
          selected: isSelected(day, monthType)
        });
        return (
          <WrapTd onClick={() => this.onDaySelect(day, monthType)} className={classname} key={i}>
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
      <Wrap fullscreen={this.props.fullscreen}>
        <WrapHead>
          <div>
            <span className="mr20" onClick={() => this.onYearChange('pre')}>
              {`<<`}
            </span>
            <span className="mr20" onClick={() => this.onMonthChange('pre')}>
              {'<'}
            </span>
            <span>
              {year}年{fillZero(month)}月
            </span>
            <span className="ml20" onClick={() => this.onMonthChange('next')}>
              {'>'}
            </span>
            <span className="ml20" onClick={() => this.onYearChange('next')}>
              {`>>`}
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
