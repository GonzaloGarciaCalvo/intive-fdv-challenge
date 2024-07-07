import { useState, useContext, useEffect } from 'react'

import './App.css'
import { Person } from './types'
import { useFetch } from './utils/useFetch'
import InputField from './components/InputField'
import Table from './components/Table'
import { ageAtTImef } from './utils/ageAtTime'
import { Link, useLocation } from 'react-router-dom'
import { StoreContext } from './components/Context'

function Home() {

  const [person, setPerson] = useState<Person>({
    name:"",
    surname:"",
    country:"",
    birthday: ""
  })

  const {countries/* , loading, error */} = useFetch()
  const [persons, setPersons] = useState<Person[]>([])
  const {language, setLanguage} = useContext(StoreContext) || {}
  const location = useLocation();
  const currentPath = location.pathname.slice(1)
  
  useEffect( () => {
    if (setLanguage) {
      setLanguage(currentPath)}
  },[])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPersons([...persons, person])

    const personsInLs = localStorage.getItem("intive-fdv-persons")
    if (personsInLs) {
      const persArr:Person[] = JSON.parse(personsInLs)
      const newPersonsLs = JSON.stringify(persArr.concat(person))
      localStorage.setItem("intive-fdv-persons", newPersonsLs)
    } else {
        let persArr:Person[] = [person]
        const newPersonsLs = JSON.stringify(persArr)
        localStorage.setItem("intive-fdv-persons", newPersonsLs)

    }
    setPerson({
      name:"",
      surname:"",
      country:"",
      birthday: ""
    })
  }
  
  const handleChange = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    let newValue:string = ''
    let newKey:string = ''
    if (e.target instanceof HTMLInputElement) {
      newValue = e.target.value ;
      newKey = e.target.name
    } else if (e.target instanceof HTMLSelectElement) {
      newValue = e.target.value;
      newKey = e.target.name
    }
    setPerson(person => ({...person, [newKey]:newValue}))
  }
  
  const {years, date} = ageAtTImef(person)
  const personDefined = person.name && person.country && person.birthday.length===10 && Number(date.year)>1111 ? true : false 
  const handleLanguage = () => {
    if (language === "" && setLanguage) setLanguage("esp")
    if(language ==="esp" && setLanguage) setLanguage("") 
  }

  return (
    <main>
      <Link to={language ===""? "/esp" : "/"}  onClick={handleLanguage}>{language ===""? "Esp" : "Eng"} </Link>
      <h1 className='text-center'>Intive - FDV Excersice</h1>
      <section className='container'>
        <form onSubmit={(e) => handleSubmit(e)} className='leftBox'>
          <InputField
            label={language ==="" ? "Name" : "Nombre"}
            handleChange={(e) => handleChange(e)}
            value={person.name}
            name="name"
            placeholder={language ==="" ? "name here" : "nombre"}
            type="text"
          />
          <InputField
            label={language ==="" ? "Surname" : "Apellido"}
            handleChange={(e) => handleChange(e)}
            value={person.surname}
            name="surname"
            placeholder={language ==="" ? "surname here" : "apellido"}
            type="text"
          /> 
          <div>
            <label htmlFor='country'>
            {language ==="" ? "Country" : "País"}: 
            </label>
            <select onChange={(e) => handleChange(e)} name='country' value={person.country} required>
              <option value="">{language ==="" ? "select your country" : "seleccione su país"}</option>
              {countries.map(el => <option key={el}>{el}</option>)}
            </select>
          </div>
          <InputField
            label={language ==="" ? "birthday" : "Nacimiento"}
            handleChange={(e) => handleChange(e)}
            value={person.birthday}
            name="birthday"
            placeholder={language ==="" ? "birthday here" : "fecha de nacimiento"}
            type="date"
          />
          <div className='btnBox'>
            <button className='submitBtn' type='submit'>Save</button>
          </div>
          { personDefined && language==="" &&
            <h3>Hello {person.name} from {person.country}, on {date.day} of {date.month} you will have {years} years </h3>
          }
          { personDefined && language==="esp" &&
            <h3>Hola {person.name} de {person.country}, el {date.day} de {date.month} tendrás {years} años </h3>
          }
        </form>
        <div className='writeBox'>
          <Table persons={persons} />
          <p>{language ==="" ? "Your name and LastName" : "Su nombre y apellido"}</p>
        </div>
      </section>
    </main>
  )
}

export default Home