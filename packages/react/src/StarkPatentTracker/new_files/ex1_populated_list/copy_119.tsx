import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '0be1cde2-4102-4636-ae55-8b9de321a9f9', title: 'PATENT_TITLE_1625' },
            { id: '0c29fc51-4dec-4001-b89e-edfc4016b70e', title: 'PATENT_TITLE_9731' },
            { id: '96e60716-973a-4cd4-a22d-91b075520eee', title: 'PATENT_TITLE_4456' },
            { id: '91a50ee4-ec80-4cdf-86c0-8eb1cced0fd1', title: 'PATENT_TITLE_8241' },
            { id: 'c26d82d4-2799-4b34-b8e0-0f1e020c8fc4', title: 'PATENT_TITLE_5423' },
        ]}
    />
)

export default App