import React from 'react'
import './Home.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Widget from '../../components/Widget/Widget'
import Feature from '../../components/Feature/Feature'
import Chart from '../../components/Chart/Chart'
import Table from '../../components/Table/Table'

const Home = () => {
  return (
    <div className='home'>
            <Sidebar/>
            <div className="homeContainer">
              <Navbar/>
              <div className="widgets">
                <Widget type ="user"/>
                <Widget type="order"/>
                <Widget type="earning"/>
                <Widget type="balance"/>
              </div>
              <div className="charts">
                <Feature/>
                <Chart title = "Last Year Revenue" aspect={2 / 1}/>
              </div>
              <div className="listContainer">
                <div className="listTitle">
                    Latest Transactions
                </div>

                <Table/>
              </div>
            </div>
    </div>
  )
}

export default Home