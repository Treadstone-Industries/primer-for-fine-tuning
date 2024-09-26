import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '0dfbac87-a82d-421b-9e42-75527e0bf131', title: 'PATENT_TITLE_9746' },
            { id: '9841a555-2873-4c90-89b2-6323824bbc1e', title: 'PATENT_TITLE_9580' },
            { id: 'ae16e9ca-69d3-4b3c-a0b8-785293c559a7', title: 'PATENT_TITLE_9140' },
            { id: 'dc1c309e-7c98-4a89-8557-73c5bc4944a2', title: 'PATENT_TITLE_4037' },
            { id: '2a845852-522a-44b9-93ad-5646e5d8171b', title: 'PATENT_TITLE_1915' },
            { id: 'd7536d8a-3de0-4da2-9d09-67031eaf632d', title: 'PATENT_TITLE_8352' },
        ]}
    />
)

export default App