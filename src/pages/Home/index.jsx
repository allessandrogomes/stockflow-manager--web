import { Alert, Box } from "@mui/material"
import FieldAddNewData from "../../components/FieldAddNewData"
import DataTable from "../../components/Table"
import { useEffect, useState } from "react"



function Home() {

  const [requestRegisteredSuccessfully, setRequestRegisteredSuccessfully] = useState(undefined)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRequestRegisteredSuccessfully(null)
    }, 5000)

    return () => clearTimeout(timeoutId)
  }, [requestRegisteredSuccessfully])

  return (
    <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '50px', justifyContent: 'center' }}>
      {
        requestRegisteredSuccessfully === true ? (
          <Alert severity="success">Requisição cadastrada com sucesso.</Alert>
        ) : requestRegisteredSuccessfully === false ? (
          <Alert severity="warning">Já existe uma bateria com esse código cadastrado, por favor tente novamente.</Alert>
        ) : null
      }
      <FieldAddNewData requestRegisteredSuccessfully={value => setRequestRegisteredSuccessfully(value)}
      />
      <DataTable />
    </Box>
  )
}

export default Home