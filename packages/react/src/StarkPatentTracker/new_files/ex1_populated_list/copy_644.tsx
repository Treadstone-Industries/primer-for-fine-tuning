import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '9295e574-892e-4cff-b596-5dbb1e5af5fb', title: 'PATENT_TITLE_2481' },
            { id: '0161a705-b99f-41d4-850a-a0b0be6ff505', title: 'PATENT_TITLE_1465' },
            { id: '0e9de578-2472-4876-9de0-d7a64832edbd', title: 'PATENT_TITLE_1106' },
            { id: 'ddbea996-b3c0-409f-bdaf-81807826e12a', title: 'PATENT_TITLE_4145' },
            { id: 'ce79970f-1e02-482b-94bb-f381a230234e', title: 'PATENT_TITLE_2653' },
            { id: 'c1a23998-18cb-49a3-9c66-a11152356b7a', title: 'PATENT_TITLE_7084' },
            { id: '03b6aae9-f69b-4ebe-a54c-3bbecc2b3f1a', title: 'PATENT_TITLE_2316' },
            { id: 'ba6ab227-9a34-4910-b87f-1e026f023064', title: 'PATENT_TITLE_2017' },
            { id: '35cc9fec-01bc-4a60-8e32-be95240cf9ba', title: 'PATENT_TITLE_2879' },
        ]}
    />
)

export default App