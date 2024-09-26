import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'bc07647a-d561-4eb7-9033-7936858869a7', title: 'PATENT_TITLE_2710' },
            { id: '4aa7e530-bff2-40b8-b357-ee0d92f8ffeb', title: 'PATENT_TITLE_8778' },
            { id: '9463f64f-7dc0-4b5d-93cf-cbfa813fe4b3', title: 'PATENT_TITLE_4499' },
            { id: 'c24ea096-5166-4f29-b199-73f68c738b8c', title: 'PATENT_TITLE_5780' },
            { id: 'bf47df55-57a1-44f7-9d14-daba0ef80836', title: 'PATENT_TITLE_5350' },
            { id: '4ee373cd-c68f-4737-9fb9-92c7be18bef7', title: 'PATENT_TITLE_7581' },
            { id: '32f6d9d8-9ac3-478f-b868-5b674e7a10c9', title: 'PATENT_TITLE_9890' },
        ]}
    />
)

export default App