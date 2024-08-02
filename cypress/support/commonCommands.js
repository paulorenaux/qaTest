// ***********************************************
// This file contains non-cypress javascript
// commands to be used in any other files in this
// project.
// ***********************************************

export function advanceDate(currentDate, addedDays) {
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();

  /** identify if it is a leap year, used to identify maximum days in February */
  const leapYear = (year % 100 != 0 || year % 400 == 0) && year % 4 == 0;

  const maxDays =
    month == 1 && leapYear
      ? 29
      : month == 1 && !leapYear
      ? 28
      : [0, 2, 4, 6, 7, 9, 11].includes(month)
      ? 31
      : 30;

  // if not skipping month
  if (maxDays > addedDays) {
    return new Date(
      year,
      currentDate.getMonth(),
      currentDate.getDate() + addedDays
    );
  }

  // if should skip month after december
  if (month == 11) {
    year = year + 1;
    month = 0;
  }

  // days to add after skipping month
  return advanceDate(new Date(year, month + 1, 0), addedDays - maxDays);
}
