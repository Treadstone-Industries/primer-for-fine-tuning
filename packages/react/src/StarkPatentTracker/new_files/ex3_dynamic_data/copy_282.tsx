import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '1c71bacf-f50e-4aed-9faa-1ac48c4a1089', title: 'PATENT_TITLE_7363' },
        { id: '59b81013-ee49-41d9-8fd4-4c5959e866b1', title: 'PATENT_TITLE_5079' },
        { id: '53a61375-fc9f-4bf4-a7c7-dd247ee99f41', title: 'PATENT_TITLE_3821' },
        { id: '48ea27cb-558b-4cfd-846c-3f9e20605873', title: 'PATENT_TITLE_4599' },
        { id: '17a9d8f6-ba3a-45d2-a623-2ecfccd34670', title: 'PATENT_TITLE_4209' },
        { id: 'cf6ecb8d-38c5-4731-a139-99e31b572e69', title: 'PATENT_TITLE_3238' },
        { id: 'c9d6fd5b-f8e5-47e4-ab8f-181b5d1e2007', title: 'PATENT_TITLE_1620' },
        { id: '749e0427-95b4-467c-af25-442dfa73bfe2', title: 'PATENT_TITLE_8385' },
        { id: 'b75f10ad-73e1-4e0b-8c6f-c8af12bcdfc9', title: 'PATENT_TITLE_5961' },
        { id: 'cfcc4058-ec28-4d2e-b9f0-3b77bbf7372d', title: 'PATENT_TITLE_5645' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App