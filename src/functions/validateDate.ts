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
