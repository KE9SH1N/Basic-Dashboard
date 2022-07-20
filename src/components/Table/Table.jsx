import React from 'react'

import "./Table.scss"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {

    const rows = [
        {
            id: 112233,
            product: "abc",
            img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            customer:"John Smith",
            date:"1st March",
            amount:785,
            method: "Cash On Delivery",
            status: "Approved",
        },
        {
            id: 112233,
            product: "abc",
            img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            customer: "John Smith",
            date: "1st March",
            amount: 785,
            method: "Cash On Delivery",
            status: "Pending",
        },
        {
            id: 112233,
            product: "abc",
            img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            customer: "John Smith",
            date: "1st March",
            amount: 785,
            method: "Cash On Delivery",
            status: "Approved",
        },
        {
            id: 112233,
            product: "abc",
            img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            customer: "John Smith",
            date: "1st March",
            amount: 785,
            method: "Cash On Delivery",
            status: "Pending",
        },
    ]
  return (
      <TableContainer component={Paper} className = "table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                  <TableRow>
                      <TableCell className='tableCell'>Tracking Id </TableCell>
                      <TableCell className='tableCell'>Product Image </TableCell>
                      <TableCell className='tableCell'>Products </TableCell>
                      <TableCell className='tableCell'>Customer </TableCell>
                      <TableCell className='tableCell'>Date </TableCell>
                      <TableCell className='tableCell'>Amount </TableCell>
                      <TableCell className='tableCell'>Payment Method </TableCell>
                      <TableCell className='tableCell'>Status </TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {rows.map((row) => (
                      <TableRow key={row.id}>
                          <TableCell className='tableCell'>{row.id}</TableCell>
                          <TableCell className='tableCell'>
                              <div className="cellWrapper">
                                  <img src={row.img}  alt="" className='image' />
                                  </div>
                            </TableCell>
                          <TableCell className='tableCell'>{row.product}</TableCell>
                          <TableCell className='tableCell'>{row.customer}</TableCell>
                          <TableCell className='tableCell'>{row.date}</TableCell>
                          <TableCell className='tableCell'>{row.amount}</TableCell>
                          <TableCell className='tableCell'>{row.method}</TableCell>
                          <TableCell className='tableCell'> <span className={`status ${row.status}`}> {row.status}</span>
                          </TableCell>
                      </TableRow>
                  ))}
              </TableBody>
          </Table>
      </TableContainer>
  )
}

export default List