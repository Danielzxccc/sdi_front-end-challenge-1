export function getMonth(dateString: string) {
  const date = new Date(dateString)
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const monthName = months[date.getMonth()] // returns "Jan"
  return monthName
}

export function getDay(dateString: string) {
  return new Date(dateString).getDay()
}
