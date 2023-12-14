import React from 'react'
import { Container } from 'reactstrap'
import DataTable from '../../components/Common/ReactDatatable'

export default function Home() {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid className='text-center'>
          <DataTable />
        </Container>
      </div>
    </React.Fragment>
  )
}
