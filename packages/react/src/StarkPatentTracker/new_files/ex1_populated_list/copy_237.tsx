import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '400069f4-0dae-40ea-9171-987eb2261bc1', title: 'PATENT_TITLE_7119' },
            { id: '3bf06755-4c2e-4d65-a686-6c97bf1875a5', title: 'PATENT_TITLE_6984' },
            { id: '302da30e-55dc-4c65-acac-7f805997e494', title: 'PATENT_TITLE_7793' },
            { id: '855b8a86-8127-49b4-91ca-7d1ce0e8a61c', title: 'PATENT_TITLE_4062' },
            { id: 'c88385b6-a722-4a18-a41d-f954eced9e3f', title: 'PATENT_TITLE_2359' },
        ]}
    />
)

export default App