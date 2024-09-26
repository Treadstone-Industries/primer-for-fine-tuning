import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '99efc7a4-dd22-4139-96d6-765bfa31b256', title: 'PATENT_TITLE_3931' },
            { id: '4844a58a-91ab-4a52-a616-78e39d239a65', title: 'PATENT_TITLE_1474' },
            { id: '9087e15f-b6e9-402c-b40c-22b1cfd49ab2', title: 'PATENT_TITLE_5568' },
            { id: 'c8ee0d98-7396-4e38-a328-0013ee5e624b', title: 'PATENT_TITLE_3604' },
        ]}
    />
)

export default App