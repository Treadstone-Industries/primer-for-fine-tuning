import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '0c859068-4611-4070-b7e8-62e5c0ab41a6', title: 'PATENT_TITLE_2262' },
            { id: 'af64978a-6c5b-4f43-a900-4c86c258e4c5', title: 'PATENT_TITLE_1602' },
            { id: '152b53a2-31da-4d1b-9c6a-d5efe6769e2f', title: 'PATENT_TITLE_4615' },
        ]}
    />
)

export default App