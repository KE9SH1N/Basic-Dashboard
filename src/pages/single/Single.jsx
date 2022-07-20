import React from 'react'
import './Single.scss'

import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
import Chart from "../../components/Chart/Chart"
import Table from "../../components/Table/Table"

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">
              Information
            </h1>
            <div className="item">
              <img className='itemImg' 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
                alt="altUser" />
              <div className="details">
                <h2 className="itemTitle">Jane Doe</h2>
                <div className="detailItem">
                  <span className="itemKey">Email</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Phone</span>
                  <span className="itemValue">01315302640</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Address</span>
                  <span className="itemValue">Khilkhet, Nikunja-2, Dhaka-1229</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">State</span>
                  <span className="itemValue">Dhaka</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Country</span>
                  <span className="itemValue">Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right"> 
            <Chart title="User Spending (Last Year)" aspect={3 / 1}/>
          </div>
        </div>

        <div className="bottom">
          <h1 className="title">
            Last Transactions
          </h1>
          <Table />
        </div>
      </div>
    </div>
    
  )
}

export default Single