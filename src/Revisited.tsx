import { useContext, useState } from "react"
import { StoreContext } from "./components/Context"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Table from "./components/Table";

function Revisited() {
  const {authKey} = useContext(StoreContext) || {}
  const lsData = localStorage.getItem("intive-fdv-persons")
  const initialPersons = lsData? JSON.parse(lsData) : []
  const [persons, _] = useState(initialPersons)

  const navigate = useNavigate()

  useEffect( () => {
    if (!authKey) navigate('/')

  },[])
  return (
    <div>Revisited
      { persons && <Table persons={persons} /> }
    </div>
  )
}
export default Revisited