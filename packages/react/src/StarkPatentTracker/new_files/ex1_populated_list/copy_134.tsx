import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '7638c79b-e83b-46d5-9435-c9eab2ec0c54', title: 'PATENT_TITLE_3711' },
            { id: '21ada2fd-abf2-43f2-9db9-baf4e7999be5', title: 'PATENT_TITLE_6301' },
            { id: '8bbc7158-f96c-42c7-8d5e-a251c1144065', title: 'PATENT_TITLE_3624' },
            { id: '6a0ae70f-3e65-4381-bae4-36383c29ed4b', title: 'PATENT_TITLE_4637' },
        ]}
    />
)

export default App