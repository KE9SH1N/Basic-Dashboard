import React from 'react'
import './Widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';



const Widget = ({type}) => {

    let data;

    const amount = 100
    const diff = 20

    switch(type){
        case "user":
            data={
                title:"Users",
                isMoney: false,
                link:"See All Users",
                icon: <PersonOutlineOutlinedIcon className='icon user'/>
            };
            break;

        case "order":
            data = {
                title: "Orders",
                isMoney: false,
                link: "View All Orders",
                icon: <ShoppingCartOutlinedIcon className='icon order' />
            };

            break;

        case "earning":
            data = {
                title: "Earning",
                isMoney: true,
                link: "View Net Earning",
                icon: <MonetizationOnOutlinedIcon className='icon earn' />
            };

            break;

        case "balance":
            data = {
                title: "Balance",
                isMoney: true,
                link: "See Balance Details",
                icon: <AccountBalanceWalletOutlinedIcon className='icon balance' />
            };

            break;

            default:
            
            break;
    }
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"}{amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon/>
                {diff} %
            </div>
              {data.icon}

        </div>
    </div>
    
  )
}

export default Widget