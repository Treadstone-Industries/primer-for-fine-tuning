import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '2ec59383-2f58-477c-acab-fa15fe6daef6', title: 'PATENT_TITLE_5299' },
        { id: '3ad15dd8-6c20-41c3-ad0a-ff9e679c663f', title: 'PATENT_TITLE_8267' },
        { id: '9f14972c-239f-4d6a-8dd5-b00bf40ba0d9', title: 'PATENT_TITLE_8138' },
        { id: 'f27b4870-4e35-423b-8e3d-a77029dfdfa9', title: 'PATENT_TITLE_4100' },
        { id: '60d847c7-c723-400e-80d2-7dd51c23c686', title: 'PATENT_TITLE_6466' },
        { id: 'a6c221fc-d81c-4f3b-b2eb-3150b84fab1c', title: 'PATENT_TITLE_4788' },
        { id: '01328009-e0d8-4bad-b33a-ce48875dc748', title: 'PATENT_TITLE_1350' },
        { id: '06b8d8a3-ba5c-4dc3-bc94-0ee5211782bc', title: 'PATENT_TITLE_7890' },
        { id: '289b985d-be35-46ab-8e23-f04e5a1e637e', title: 'PATENT_TITLE_1645' },
        { id: 'c8f1c8f3-6298-476b-978b-186e3ee6ed7d', title: 'PATENT_TITLE_8812' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App