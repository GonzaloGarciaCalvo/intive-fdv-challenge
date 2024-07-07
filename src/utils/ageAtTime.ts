import { Person } from "../types"

export function ageAtTImef (person:Person) {
  const date = {
    year: person.birthday.slice(0,4),
    month: person.birthday.slice(5,7),
    day: person.birthday.slice(8,10),
  }
  return {years:new Date().getFullYear() - Number(date.year), date }
}