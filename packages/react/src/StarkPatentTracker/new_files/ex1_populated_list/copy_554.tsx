import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'bb4e5d95-fcd5-4b79-b856-377f3edbbc88', title: 'PATENT_TITLE_9417' },
            { id: '23d75179-14ff-4750-aa01-a7be9af17325', title: 'PATENT_TITLE_3746' },
            { id: 'eab83010-e394-4c51-833d-408bcbca808e', title: 'PATENT_TITLE_5954' },
            { id: 'fc26a05d-a310-4827-8a0d-ac1312ac8183', title: 'PATENT_TITLE_8350' },
            { id: '175311f7-524d-41ff-9ee8-3025664c3322', title: 'PATENT_TITLE_7975' },
        ]}
    />
)

export default App