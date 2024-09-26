import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f7f2e171-242f-43c2-b4eb-aaa8c9e34590', title: 'PATENT_TITLE_1727' },
            { id: '446b0e3c-52ee-485a-afd6-619ad3ccf637', title: 'PATENT_TITLE_4867' },
            { id: '749e31ca-4361-47bf-9efc-e8142aad21b3', title: 'PATENT_TITLE_4437' },
            { id: '8f27c526-fb23-4973-a51f-cfc421297559', title: 'PATENT_TITLE_6143' },
            { id: 'ff502f9d-3fa4-47e8-b6fe-96828f7cb197', title: 'PATENT_TITLE_5648' },
        ]}
    />
)

export default App