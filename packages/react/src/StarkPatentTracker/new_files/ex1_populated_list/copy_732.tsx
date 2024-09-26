import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '5dda04c5-71bb-43ed-b6a0-7f7ac8897f97', title: 'PATENT_TITLE_8973' },
            { id: '64edc6f8-4c14-48b0-bf33-2dceca74a58b', title: 'PATENT_TITLE_3696' },
            { id: '1c2cb555-c489-4b02-8a1e-5f7d837ae4a3', title: 'PATENT_TITLE_7231' },
            { id: '11606204-4e37-46ae-9cf3-52e2096063e6', title: 'PATENT_TITLE_2730' },
            { id: 'f2df858e-d660-4585-9611-5cad972062c9', title: 'PATENT_TITLE_6116' },
            { id: '23f4aed8-ee41-42a0-b39e-e6d35902cbae', title: 'PATENT_TITLE_5837' },
            { id: 'e54ac5f9-e339-4957-af5e-abd01ae7c9c1', title: 'PATENT_TITLE_8097' },
            { id: '37c5d254-e4fb-412d-a98c-c115c500999f', title: 'PATENT_TITLE_5172' },
        ]}
    />
)

export default App