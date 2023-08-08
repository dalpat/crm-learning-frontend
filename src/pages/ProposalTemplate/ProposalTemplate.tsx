import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom' 

export default function ProposalTemplate() {
    return (
        <div>
            <Link to="/proposal-templates-form">
                <Button variant="outlined"> + New Proposal</Button>
            </Link>
        </div>
    )
}
