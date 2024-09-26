import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '602ade2c-ac51-475b-bb44-e0371f73e1af', title: 'PATENT_TITLE_6772' },
            { id: '85681521-4137-479b-9a98-33ad374377e5', title: 'PATENT_TITLE_5467' },
            { id: '55e4ca33-9de5-41a5-91a4-4953d36db13f', title: 'PATENT_TITLE_8207' },
            { id: '2db6e959-296e-4bc6-967a-a514201d65a2', title: 'PATENT_TITLE_1896' },
            { id: 'bfc37a17-d430-4e06-ab75-26e583682493', title: 'PATENT_TITLE_9304' },
            { id: 'cd2bf141-67ad-4cfc-9e95-dd069d1f2e50', title: 'PATENT_TITLE_4269' },
            { id: '841969a9-d931-48e6-a2d6-3ba492dd7259', title: 'PATENT_TITLE_6215' },
        ]}
    />
)

export default App