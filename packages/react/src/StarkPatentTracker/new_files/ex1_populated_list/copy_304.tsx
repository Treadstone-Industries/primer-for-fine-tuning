import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '8fc5f883-9c9b-420c-847f-01b3835e0422', title: 'PATENT_TITLE_4351' },
            { id: '2f9b34c1-a5ae-46f3-859f-57282c98cd16', title: 'PATENT_TITLE_5493' },
            { id: 'f6410481-b035-4a27-a859-bca0e3cec00d', title: 'PATENT_TITLE_5589' },
            { id: 'a0142d64-f44e-427a-bee2-2c48f60537a3', title: 'PATENT_TITLE_7810' },
            { id: '3b6a0fe3-6391-47cb-a9d2-e1618691a17a', title: 'PATENT_TITLE_6526' },
        ]}
    />
)

export default App