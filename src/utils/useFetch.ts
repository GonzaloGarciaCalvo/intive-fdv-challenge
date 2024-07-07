import { useEffect, useState } from "react"
import { Country } from "../types"

export function useFetch () {
  const localStorageData = localStorage.getItem("intive-fdv-countries")
  const initialState = localStorageData? JSON.parse(localStorageData) : []
  const [countries, setContries] = useState<string[]>(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect( () => {
    if (initialState.length===0) {
      console.log("ejecuta fetch")
      setLoading(true)
      fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length>0) {
          setContries(data.map((el:Country) => el.translations.spa.common).sort())
        } else throw new Error("Empty response")
      })
      .finally(() => setLoading(false))
      .catch(() => setError(true))
    }
    },[])

  localStorage.setItem("intive-fdv-countries", JSON.stringify(countries))

  return {countries, loading, error}
}

