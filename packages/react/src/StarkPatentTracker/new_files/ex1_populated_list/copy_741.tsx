import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ff9b1c2f-ab44-41b5-ab77-eceac113dbe9', title: 'PATENT_TITLE_2777' },
            { id: '58f19436-a569-47c0-b19e-cfe3594806ac', title: 'PATENT_TITLE_1776' },
        ]}
    />
)

export default App