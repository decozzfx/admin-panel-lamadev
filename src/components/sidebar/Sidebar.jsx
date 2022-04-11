import { AccountCircle, Assessment, Dashboard, ExitToApp, LocalShipping, Notifications, Payment, Person, SettingsSystemDaydream, Store, Subject, } from '@material-ui/icons'
import React from 'react'
import './sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className='logo'>Admin</span>
        </div>
        <hr className='hr'/>
        <div className='center'>
            <ul>
                <p className='title'>MAIN</p>
                <li>
                    <Dashboard className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p className='title'>LISTS</p>
                <li>
                    <Person className='icon'/>
                    <span>Users</span>
                </li>
                <li>
                    <Store className='icon'/>
                    <span>Products</span>
                </li>
                <li>
                    <Payment className='icon'/>
                    <span>Order</span>
                </li>
                <li>
                    <LocalShipping className='icon'/>
                    <span>Delivery</span>
                </li>
                <p className='title'>USEFUL</p>
                <li>
                    <Assessment className='icon'/>
                    <span>Stats</span>
                </li>
                <li>
                    <Notifications className='icon'/>
                    <span>Notifications</span>
                </li>
                <p className='title'>SERVICE</p>
                <li>
                    <SettingsSystemDaydream className='icon'/>
                    <span>System Health</span>
                </li>
                <li>
                    <Subject className='icon'/>
                    <span>Logs</span>
                </li>
                <p className='title'>USER</p>
                <li>
                    <AccountCircle className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <ExitToApp className='icon'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar