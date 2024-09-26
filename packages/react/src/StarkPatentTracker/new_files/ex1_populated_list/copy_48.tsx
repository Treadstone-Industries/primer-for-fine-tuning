import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '64f6bed8-b3e1-4936-a947-adffd343481b', title: 'PATENT_TITLE_3837' },
            { id: '72dab0f5-c51b-4e20-80a6-a796e4d2d5f2', title: 'PATENT_TITLE_8020' },
            { id: '3ede1d17-20ae-4469-85f9-9a04dc2674ea', title: 'PATENT_TITLE_5131' },
            { id: '829b5b9f-5f1a-43c2-b89f-4a510725a9e6', title: 'PATENT_TITLE_6069' },
        ]}
    />
)

export default App