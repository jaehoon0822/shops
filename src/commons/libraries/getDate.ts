const getDate = (date: string) => {
  const newDate = new Date(date)
  const y = newDate.getFullYear()
  const d = newDate.getDate().toString().padStart(2, '0')
  const m = (newDate.getMonth() + 1).toString().padStart(2, '0')

  return `${y}-${m}-${d}`
}

export default getDate
