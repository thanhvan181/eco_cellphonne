import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../../components/Header/Header'
interface Props {
    
}

const WebsiteLayout = (props: Props) => {
    return (
        <div>
            <Header/>
            <Outlet/>

            
        </div>
    )
}

export default WebsiteLayout




