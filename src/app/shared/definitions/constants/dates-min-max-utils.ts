import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

function addTimeToDate (
  date: Date,
  years: number = 0,
  months: number = 0,
  days: number = 0) {

  date.setFullYear(date.getFullYear() + years);
  date.setMonth(date.getMonth() + months);
  date.setDate(date.getDate() + days);
}

/**
 * The min Age date is the current date minus 100 years
 *
 * @returns {NgbDateStruct}
 */
export function getMinAgeDate(): Date {
  const tempDate = new Date();

  addTimeToDate(tempDate, -100);
  return tempDate;
}

/**
 * The min moving date 1 day from the current date
 *
 * @returns {NgbDateStruct}
 */
export function getMinMovingDate(): Date {
  const tempDate = new Date();

  addTimeToDate(tempDate, 0, 0, 1);
  return tempDate;
}

/**
 * The min employment date is the current date minus 100 years
 *
 * @returns {NgbDateStruct}
 */
export function getMinEmploymentDate(): Date {
  return getMinAgeDate();
}

/**
 * The maximum age date is the current date minus 18 years.
 *
 * @returns {NgbDateStruct}
 */
export function getMaxAgeDate(): Date {
  const tempDate = new Date();

  addTimeToDate(tempDate, -18, 0, 0);

  return tempDate;
}

/**
 * The maximum moving date is 10 years from now
 *
 * @returns {NgbDateStruct}
 */
 export function getMaxMovingDate(): Date {
  const tempDate = new Date();

  addTimeToDate(tempDate, 10, 0, 0);

  return tempDate;
}

/**
 * The maximum moving out date is 10 years from now
 *
 * @returns {NgbDateStruct}
 */
export function getMaxMovingOutDate(): Date {
  const tempDate = new Date();

  addTimeToDate(tempDate, 10, 0, 0);

  return tempDate;
}

/**
 * The maximun employment date is the current day.
 *
 * @returns {NgbDateStruct}
 */
export function getMaxEmploymentDate(): Date {
  const tempDate = new Date();

  return tempDate;
}
