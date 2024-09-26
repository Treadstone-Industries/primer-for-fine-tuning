import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ec9ddea1-9f2b-476c-825a-6c65dec8bfa5', title: 'PATENT_TITLE_2332' },
            { id: '073b7631-69db-4a27-947b-ec2fb45effe4', title: 'PATENT_TITLE_5584' },
            { id: '1b9a861a-02b5-4b4a-b131-04c4b181a85b', title: 'PATENT_TITLE_6455' },
            { id: '0d218707-100b-4be1-a9c4-16c86ea4c0c9', title: 'PATENT_TITLE_8234' },
            { id: '6413f2ce-5195-4298-b70d-a8c684564c2c', title: 'PATENT_TITLE_5644' },
            { id: 'f231c132-31e7-4e4f-82e3-b4bd78adf819', title: 'PATENT_TITLE_5083' },
        ]}
    />
)

export default App