import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '17ae5ff6-7931-484b-80aa-caccfc3cd0e8', title: 'PATENT_TITLE_3793' },
        { id: '0b53183f-9752-464f-97b4-f151c494a2b0', title: 'PATENT_TITLE_2213' },
        { id: '3a800680-ee48-4cc6-9735-77dfd8c267c0', title: 'PATENT_TITLE_8360' },
        { id: '1b3fb592-ee89-455e-b738-0fd53e8e4439', title: 'PATENT_TITLE_2919' },
        { id: 'd0b54645-8f6b-402b-8f43-f3c1d256322e', title: 'PATENT_TITLE_6080' },
        { id: 'ad9d63b7-f2a7-4bfc-9161-87514a8cb4ed', title: 'PATENT_TITLE_4775' },
        { id: '67e6e74c-58eb-4a2f-8c5e-b91039035489', title: 'PATENT_TITLE_8669' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App