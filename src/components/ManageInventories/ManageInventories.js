import React, { useEffect, useState } from 'react';
import "./ManageInventories.css";
import { useTable } from 'react-table'

const ManageInventories = () => {



    const [gymData, setGymData] = useState([]);
    useEffect(() => {
        fetch("https://protected-headland-35009.herokuapp.com/service")
            .then(res => res.json())
            .then(data => setGymData(data));
    }, []);





    const data = React.useMemo(
        () => [
          {
            col1: 'Hello',
            col2: 'World',
          },
          {
            col1: 'react-table',
            col2: 'rocks',
          },
          {
            col1: 'whatever',
            col2: 'you want',
          },
          {
            col1: 'whatever',
            col2: 'you want',
          },
          {
            col1: 'whatever',
            col2: 'you want',
          },
          {
            col1: 'whatever',
            col2: 'you want',
          },
          {
            col1: 'whatever',
            col2: 'you want',
          },
        ],
        []
      )

      const columns = React.useMemo(
        () => [
          {
            Header: 'Column 1',
            accessor: 'col1', // accessor is the "key" in the data
          },
          {
            Header: 'Column 2',
            accessor: 'col2',
          },
          {
            Header: 'Column 3',
            accessor: 'col3',
          },
          {
            Header: 'Column 4',
            accessor: 'col4',
          },
          {
            Header: 'Column 5',
            accessor: 'col5',
          },
          {
            Header: 'Column 6',
            accessor: 'col6',
          },
        ],
        []
      )
 
      



      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data })

    return (
        <table {...getTableProps()} style={{ border: 'solid 1px blue' , width:"100%" , height:"100vh" }}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                   borderBottom: 'solid 3px red',
                   background: 'aliceblue',
                   color: 'black',
                   fontWeight: 'bold',
                 }}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: '10px',
                       border: 'solid 1px gray',
                       background: 'papayawhip',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
    );
       
     
    
        };
 
    


export default ManageInventories;