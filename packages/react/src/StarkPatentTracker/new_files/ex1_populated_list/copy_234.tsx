import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '5057e7c1-3e6e-4b7e-a1da-9bc751dd9795', title: 'PATENT_TITLE_8537' },
            { id: '0d45bc3e-02d6-4604-b6ce-77b3ac64d3e2', title: 'PATENT_TITLE_9480' },
            { id: '2d142e76-662f-4343-8262-1e094b36ba42', title: 'PATENT_TITLE_4348' },
            { id: 'e2139b56-9bdc-43f0-b18c-fad09c67d1f2', title: 'PATENT_TITLE_2094' },
            { id: '90c7ee99-4ff8-42d4-a4be-28c96454946b', title: 'PATENT_TITLE_1957' },
            { id: 'fb4dc4ff-19a3-4f24-8bb5-9ddf7c00a81b', title: 'PATENT_TITLE_3278' },
        ]}
    />
)

export default App