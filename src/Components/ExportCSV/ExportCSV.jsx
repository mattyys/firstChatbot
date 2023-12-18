import React from 'react'

import { CSVLink } from 'react-csv';

export const ExportCSV = ({data, filname}) => {


  return (
    <CSVLink data={data} filname={filname}>
        <button className='btn btn-success m-2'>Exportar a CSV</button>
    </CSVLink>
  )
}
