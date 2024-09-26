import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4c01f731-cf01-454f-881b-5f22ab579f68', title: 'PATENT_TITLE_9575' },
            { id: '62277f1b-98e8-46a8-9e12-7c2cf721ccb9', title: 'PATENT_TITLE_2364' },
            { id: '06ca3456-f614-4bc0-88c5-8aaefe109fb5', title: 'PATENT_TITLE_9081' },
            { id: '47e85153-97bc-47ce-81cb-e00c8cf78771', title: 'PATENT_TITLE_9874' },
            { id: '878b9081-7c94-4a33-8048-c31374e36ffc', title: 'PATENT_TITLE_2389' },
            { id: '144e7118-d0b6-455a-a97b-b80018b45412', title: 'PATENT_TITLE_3688' },
            { id: 'dec00509-9dd7-409a-a2cf-ab0da29a9ed0', title: 'PATENT_TITLE_4919' },
            { id: 'f7efe2b9-46b6-4333-8579-053a4465d528', title: 'PATENT_TITLE_2071' },
        ]}
    />
)

export default App