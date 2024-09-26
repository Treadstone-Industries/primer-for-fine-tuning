import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '004058a1-1aca-4aaf-8324-b4df9bff79b7', title: 'PATENT_TITLE_1507' },
            { id: 'a8e5196a-122a-4927-98ea-fc1a2f1bf528', title: 'PATENT_TITLE_8148' },
            { id: '43015edb-0ee9-4bb7-974f-2f99b38581a8', title: 'PATENT_TITLE_5396' },
            { id: '7e8375b6-c8bf-451b-ada7-dda644f14f8c', title: 'PATENT_TITLE_1599' },
            { id: 'eee87fa3-aec3-4af2-ab85-75d460dee877', title: 'PATENT_TITLE_4637' },
            { id: '745495f2-1d3f-4768-878a-a1c2fe1835b7', title: 'PATENT_TITLE_1087' },
            { id: '7396539e-9867-44d6-9073-ef263a59fed7', title: 'PATENT_TITLE_4990' },
            { id: 'ec39ac29-b6c5-41fd-a56c-95ddf5d26ab1', title: 'PATENT_TITLE_9196' },
        ]}
    />
)

export default App