import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '97a5f938-d8bc-4c2c-9283-1af482ed47d4', title: 'PATENT_TITLE_2129' },
            { id: '596e8504-0f6d-495f-a536-0a857a2542d0', title: 'PATENT_TITLE_7303' },
            { id: '0d5c745d-e4d6-4af7-b310-762b673ab3e4', title: 'PATENT_TITLE_2964' },
            { id: '19147db6-9019-4a5b-9118-d3d5e7db732e', title: 'PATENT_TITLE_3092' },
            { id: '27ce6567-e1fe-4216-8a4e-5dd47926b223', title: 'PATENT_TITLE_3326' },
            { id: '7d5d4031-9c81-4dd1-8063-1e102db03e45', title: 'PATENT_TITLE_8252' },
        ]}
    />
)

export default App