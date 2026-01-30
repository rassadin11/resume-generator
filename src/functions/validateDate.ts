export const getNormalDate = function (date: Date): string {
  let day: string | number = date.getDate()
  let month: string | number = date.getMonth() + 1
  const year = date.getFullYear()

  if (day < 10) day = '0' + day
  if (month < 10) month = '0' + month

  return year + '-' + month + '-' + day
}

export const validateDates = function (
  startDate: Date,
  endDate: Date,
  noFutureDates: boolean = false,
): boolean {
  const now = new Date()

  // Начальная дата не должна быть больше или равна конечной
  if (startDate >= endDate) {
    return false
  }

  // Если флаг установлен, ни одна дата не может быть в будущем
  if (noFutureDates) {
    if (startDate > now || endDate > now) {
      return false
    }
  }

  return true
}
