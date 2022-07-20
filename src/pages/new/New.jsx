import React from 'react'
import './New.scss'

import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined"

import {useState} from "react"

const New = ({inputs, title}) => {

  const [file, setFile] = useState("");
  console.log(file)
  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file)
              :"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"} 
           alt="" />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id='file' onChange={e=> setFile(e.target.files[0])} style={{ display: "none" }} />
              </div>
              {inputs.map((input)=>(
                <div className="formInput" key={input.id}>
                  <label htmlFor="">{input.label}</label>
                  <input type= {input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <button>Send</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New