export function format(date: Date | string, formatStr: string) {
  if (typeof date === 'string') date = new Date(date)
  if (date.toString() === 'Invalid Date') return null

  let dateStr = formatStr

  dateStr = dateStr.replace(/YYYY/, `${date.getFullYear()}`)
  dateStr = dateStr.replace(/MM/, `${date.getMonth() + 1}`.padStart(2, '0'))
  dateStr = dateStr.replace(/DD/, `${date.getDate()}`.padStart(2, '0'))

  return dateStr
}
