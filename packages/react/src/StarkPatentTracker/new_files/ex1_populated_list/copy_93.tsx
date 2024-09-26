import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'fb3903d5-9691-4d15-ab3f-b69e703f7fbb', title: 'PATENT_TITLE_7876' },
            { id: 'c58f0d04-a1aa-4894-b2a7-b487301254f7', title: 'PATENT_TITLE_8937' },
            { id: 'd75b71d1-e5bf-472e-a33d-9fec64938caa', title: 'PATENT_TITLE_5425' },
            { id: '317d47bd-31e4-4d12-aaa7-f13ee8ed0538', title: 'PATENT_TITLE_1633' },
            { id: '2705af5e-e820-4ef7-82bc-8d7477c80e8d', title: 'PATENT_TITLE_7340' },
            { id: '1c31ecca-f94e-451f-b787-8706a281dfcc', title: 'PATENT_TITLE_5821' },
        ]}
    />
)

export default App