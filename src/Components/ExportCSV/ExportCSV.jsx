import React from 'react'

import { CSVLink } from 'react-csv';

export const ExportCSV = ({data, filname}) => {


  return (
    <CSVLink data={data} filname={filname}>
        Exportar a CSV
    </CSVLink>
  )
}
