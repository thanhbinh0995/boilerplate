import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import { DATE_FORMAT, DATE_TIME_FORMAT } from 'config/constants';
import type { Dayjs, OpUnitType, QUnitType } from 'dayjs';
import type { DurationUnitsObjectType } from 'dayjs/plugin/duration';

dayjs.extend(relativeTime);
dayjs.extend(duration);

export function convertTimestampToDate(timestamp: number = 0): Date {
  return dayjs.unix(timestamp).toDate();
}

export function formatDate(
  date: string,
  format: string = DATE_TIME_FORMAT,
): string {
  if (!date) {
    return '';
  }
  return dayjs(date).format(format);
}

export function convertToMillisecondTimestamp(timestamp: number): number {
  return timestamp * 1000;
}

export function revertToSecondTimestamp(timestamp: number): number {
  return timestamp / 1000;
}

export function convertStringToDayjs(date: string): Dayjs {
  if (date) {
    return dayjs(date);
  }
  return null;
}

export function convertDayjsToDate(
  date: Dayjs,
  format: string = DATE_FORMAT,
): string {
  if (date) {
    return dayjs(date).format(format);
  }
  return null;
}

export function formatTimeAgo(date: string): string {
  return dayjs(date).fromNow();
}

export function diffDate(
  startDate: string,
  endDate: string,
  unit: QUnitType | OpUnitType,
): number {
  return dayjs(startDate).diff(endDate, unit);
}

export function getCurrentTimestamp(): number {
  return dayjs().valueOf();
}

export function addTime(duration: DurationUnitsObjectType, date?: Date): Dayjs {
  return dayjs(date).add(dayjs.duration(duration));
}

export function getDate(date?: string): Date {
  return dayjs(date).toDate();
}

export function getCurrentDate(): string {
  return getDate().toDateString();
}
