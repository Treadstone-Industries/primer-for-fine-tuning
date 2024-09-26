import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '41099441-7853-4d1d-a2e2-6fa3cf6dae9a', title: 'PATENT_TITLE_9707' },
            { id: 'c3d53ceb-7606-4552-b6d7-e356f8a82022', title: 'PATENT_TITLE_9385' },
            { id: '636cd1dc-2d35-4e83-b096-e40f9f8fa287', title: 'PATENT_TITLE_8581' },
            { id: '117ca8cc-e7b0-427a-b2a0-252ee5ade797', title: 'PATENT_TITLE_2327' },
            { id: '3e457208-959b-4a3d-96aa-99f19fb8371d', title: 'PATENT_TITLE_8766' },
            { id: 'b3e88adf-6e4a-4b3e-afcf-a2131f51aa73', title: 'PATENT_TITLE_7480' },
            { id: 'a9598b35-221e-4846-b124-03f61c92de91', title: 'PATENT_TITLE_2241' },
            { id: '8e5dcfbd-32aa-435d-8771-82016c36e91c', title: 'PATENT_TITLE_7596' },
        ]}
    />
)

export default App