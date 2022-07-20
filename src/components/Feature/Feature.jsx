import React from 'react'
import './Feature.scss'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Feature = () => {
  return (
    <div className="featured">
        <div className="top">
            <div className="title">Total Revenue</div>
            <div className="icon">
                  <MoreVertRoundedIcon className='icon dotMenu'/>
            </div>
        </div>
        <div className="bottom">
            <div className="featuredBar">
                  <CircularProgressbar value={70} text={"70%"} strokeWidth={10}/>
            </div>
            <p className='title'>Total Sells Made Today</p>
            <p className="amount">$420</p>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, culpa molestiae perspiciatis facilis nulla qui.</p>

            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                      <div className="itemResult negative">
                          <KeyboardArrowDownOutlinedIcon className='icon downArrow' />
                          <div className="itemAmount">
                              $12.4k
                          </div>
                      </div>
                </div>

                  <div className="item">
                      <div className="itemTitle">Last Week</div>
                      <div className="itemResult positive">
                          <KeyboardArrowUpOutlinedIcon className='icon downArrow' />
                          <div className="itemAmount">
                              $12.4k
                          </div>
                      </div>
                  </div>

                  <div className="item">
                      <div className="itemTitle">Last Month</div>
                      <div className="itemResult positive">
                          <KeyboardArrowUpOutlinedIcon className='icon downArrow' />
                          <div className="itemAmount">
                              $12.4k
                          </div>
                      </div>
                  </div>
                
            </div>
        </div>
    </div>
  )
}

export default Feature