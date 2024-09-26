import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a5718330-1cb8-4c63-a981-04db0c3bb04a', title: 'PATENT_TITLE_5042' },
            { id: '7d891ba9-28b8-4cdf-afa2-68fa42ab2e1d', title: 'PATENT_TITLE_2845' },
            { id: '8e303699-48af-4607-af2b-994a0ed1e5cf', title: 'PATENT_TITLE_8014' },
            { id: 'ac1fcd28-87f5-4c30-a668-c269b6081cdb', title: 'PATENT_TITLE_5757' },
            { id: '96735ad7-a6e0-4ac3-acee-a967851fe20c', title: 'PATENT_TITLE_9344' },
            { id: 'b7a4e591-86f8-4734-bf69-0d08077b5801', title: 'PATENT_TITLE_5372' },
            { id: '259346ec-eb22-403b-8945-1f40cb859220', title: 'PATENT_TITLE_1709' },
            { id: '3b8c2e02-6aaa-4385-930d-fdc7096a59bd', title: 'PATENT_TITLE_4978' },
            { id: 'cb61a4bb-e927-42dc-a87e-3df70c8ab5ed', title: 'PATENT_TITLE_1699' },
        ]}
    />
)

export default App