/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import React from 'react'
import { usePagination, useSortBy, useTable } from 'react-table'


const data = [
  {
    id: 1,
    gender: 'Male',
    salary: 40000
  },
  {
    id: 1,
    gender: 'Female',
    salary: 40000
  },
  {
    id: 1,
    gender: 'Others',
    salary: 40000
  },
]

const columns = [
  {
  Header: 'ID',
  accessor: 'id'
  },
  {
  Header: 'Gender',
  accessor: 'gender'
  },
  {
  Header: 'Salary',
  accessor: 'salary'
  },
]

export default function App() {

  // eslint-disable-next-line no-unused-vars
  const {getRowProps, getTableProps,getTableBodyProps,headerGroups,rows,prepareRow,getSortByToggleProps} = useTable({
    columns,
    data
  },
  useSortBy,
  usePagination
  )

  const props = getTableProps();

  return (
    <div className='container'>
      <table {...props}>
        <thead>
        {
          headerGroups.map((hg) => (
            <tr {...hg.getHeaderGroupProps()}>

              {
                hg.headers.map((header) => (
                  <th {...header.getHeaderProps(header.getSortByToggleProps())}>
                    {header.render('Header')}
                    {
                      header.isSorted && <span>{header.isSortedDesc ? '⬇' : '⬆'}</span>
                    }
                  </th>
                ))
              }
            </tr>
          ))
          
        }

        
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            return (
              <tr  {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            )
          })}



          
        </tbody>
      </table>

    </div>
  )
}
