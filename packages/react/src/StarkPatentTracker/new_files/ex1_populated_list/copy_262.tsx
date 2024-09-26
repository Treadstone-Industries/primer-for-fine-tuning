import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '9dd0e07d-867a-461a-988a-8152620a71f4', title: 'PATENT_TITLE_3304' },
            { id: 'fc61a935-cb47-45da-ad84-3185d9917ccc', title: 'PATENT_TITLE_1272' },
            { id: '35e35fc0-aa20-4cba-9e2d-170ed6addc2e', title: 'PATENT_TITLE_2915' },
            { id: 'a3f86d21-d2d1-4bd1-b871-a95cd4346f5d', title: 'PATENT_TITLE_3156' },
            { id: '8275fbab-e854-435e-b305-1bf85b70a990', title: 'PATENT_TITLE_8156' },
        ]}
    />
)

export default App