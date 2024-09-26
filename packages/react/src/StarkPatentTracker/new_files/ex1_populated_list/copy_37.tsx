import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '8ed7fb66-76c6-478e-94b4-73bcac0524d9', title: 'PATENT_TITLE_1531' },
            { id: 'b9626647-ace8-4feb-a176-e6dab3e8a460', title: 'PATENT_TITLE_1081' },
            { id: 'beaa9128-cdbc-4515-b81b-527320485491', title: 'PATENT_TITLE_9076' },
            { id: '8c9e9ddd-46e7-4ca0-9ce7-942bce8eec1f', title: 'PATENT_TITLE_1901' },
            { id: '6d7aaddf-5838-4327-bbe2-8129269514c8', title: 'PATENT_TITLE_3335' },
        ]}
    />
)

export default App