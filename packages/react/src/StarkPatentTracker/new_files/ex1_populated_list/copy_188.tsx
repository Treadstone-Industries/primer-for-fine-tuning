import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '9c321922-61bf-4399-85ef-5e9e28bbd4b4', title: 'PATENT_TITLE_9090' },
            { id: '8b6e4b4a-6cc0-4e44-814a-6259b18f334a', title: 'PATENT_TITLE_3417' },
        ]}
    />
)

export default App