import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '1bf5e68c-fc44-435d-8234-bf2682183960', title: 'PATENT_TITLE_9741' },
            { id: '5e8f7592-609d-4641-9eeb-e9cd4f337707', title: 'PATENT_TITLE_6145' },
            { id: 'b0bd03ad-9f35-46ed-b112-b2772083d948', title: 'PATENT_TITLE_9530' },
            { id: '0fdc2c7b-c436-45f7-96c0-82506eabc7db', title: 'PATENT_TITLE_8380' },
        ]}
    />
)

export default App