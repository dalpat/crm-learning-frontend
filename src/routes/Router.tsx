import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Lead from '../pages/Lead/Lead'
import ProposalTemplate from '../pages/ProposalTemplate/ProposalTemplate'
import ProposalForm from '../pages/ProposalTemplate/ProposalForm'

export default function Router() {
    return (
        <Routes>
            <Route path='/' Component={Home} />
            <Route path="/leads" Component={Lead} />
            <Route path='/proposal-templates' Component={ProposalTemplate} />
            <Route path='/proposal-templates-form' Component={ProposalForm} />
            
        </Routes>
    )
}
