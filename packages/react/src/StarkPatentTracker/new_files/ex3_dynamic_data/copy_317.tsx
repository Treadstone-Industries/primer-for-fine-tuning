import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'e38e2e69-cd55-43bf-8fbc-6bae80361ae2', title: 'PATENT_TITLE_8004' },
        { id: 'd2e38d25-9fd0-4369-8a47-3fc247c7ca1b', title: 'PATENT_TITLE_8306' },
        { id: '7ec130e8-9283-4f81-81a9-161094c9dc10', title: 'PATENT_TITLE_9891' },
        { id: 'ab4f92b0-f2a9-40b7-9b61-d3d56b595718', title: 'PATENT_TITLE_3422' },
        { id: '1116326e-e8d2-494a-9684-7f0a1c0a535f', title: 'PATENT_TITLE_8065' },
        { id: '044bad69-87c3-401b-a69b-bef837ca0402', title: 'PATENT_TITLE_5789' },
        { id: 'c0c0390b-9a46-45cb-9eaa-fe6a198c4733', title: 'PATENT_TITLE_6017' },
        { id: '139c455d-c918-495f-a794-61e8efd90be8', title: 'PATENT_TITLE_9424' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App