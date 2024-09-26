import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3700d028-9b7f-4359-8027-00f18bd130ac', title: 'PATENT_TITLE_3916' },
            { id: '35ced318-957c-4532-9319-462ee81c5dc3', title: 'PATENT_TITLE_2713' },
            { id: '101d8164-cd69-40ec-b0d1-332f5344a3cd', title: 'PATENT_TITLE_8065' },
            { id: '95407f57-ed50-4e84-820c-6eaf34c81f71', title: 'PATENT_TITLE_4400' },
            { id: '42a482e4-82c0-430c-b645-89358e8ee660', title: 'PATENT_TITLE_9116' },
            { id: '71ed6502-72bf-4b0d-8a9e-5f6f2eb70cc5', title: 'PATENT_TITLE_5460' },
        ]}
    />
)

export default App