import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f896d23d-fd94-4fe7-bd35-b9234047ac6d', title: 'PATENT_TITLE_8696' },
            { id: '201926e3-25ed-43fb-b9e3-a7e34e0a9e0a', title: 'PATENT_TITLE_9463' },
            { id: '65c69bd7-b4c4-46b9-9849-6d127e161e65', title: 'PATENT_TITLE_4614' },
            { id: '21e26595-e4f6-467a-8516-67658519235d', title: 'PATENT_TITLE_7130' },
        ]}
    />
)

export default App