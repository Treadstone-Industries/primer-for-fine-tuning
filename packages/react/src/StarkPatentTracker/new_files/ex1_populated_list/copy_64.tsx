import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '6cf6fb1a-1a4e-470d-931a-092cc5f9525e', title: 'PATENT_TITLE_9027' },
            { id: '6d5f671e-f464-428a-aa78-7883eb3c9eb6', title: 'PATENT_TITLE_7401' },
            { id: '58189fb1-3ead-4403-bf56-58c80fb3d17e', title: 'PATENT_TITLE_3441' },
            { id: 'a1c137bf-ae1b-4e5a-be6d-3fab5a731188', title: 'PATENT_TITLE_7134' },
            { id: 'c5cd13f2-c30f-4868-92e7-9b921cc31dc2', title: 'PATENT_TITLE_9026' },
            { id: '58211f94-16d9-4eb5-9389-c5799b1e604e', title: 'PATENT_TITLE_4774' },
            { id: 'a136cc83-bdb6-466b-9e38-2b77b292f3fa', title: 'PATENT_TITLE_5444' },
            { id: 'ade3b2c7-a335-4366-9595-13c468d23c86', title: 'PATENT_TITLE_5496' },
        ]}
    />
)

export default App