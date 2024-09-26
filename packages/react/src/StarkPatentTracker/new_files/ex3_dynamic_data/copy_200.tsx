import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '5d6ac353-e9f1-40c2-8a09-9d6146e3fa45', title: 'PATENT_TITLE_5731' },
        { id: '0d9daae0-4945-4356-a350-205f17e79f42', title: 'PATENT_TITLE_3885' },
        { id: 'eade6314-5a5d-4beb-8193-d010cf5c3c5f', title: 'PATENT_TITLE_3360' },
        { id: '0f6aeca3-94eb-4e2b-91df-262d9ac85d00', title: 'PATENT_TITLE_7508' },
        { id: 'b2af92cb-f3b1-4493-9583-13a8c19f6bf8', title: 'PATENT_TITLE_9893' },
        { id: 'df47450c-f411-4b5e-aa05-1b3aea788f13', title: 'PATENT_TITLE_4134' },
        { id: '464f0965-0310-4765-ba22-7f133ef56f23', title: 'PATENT_TITLE_4525' },
        { id: 'f87bf4c0-7883-4f72-966f-50f4d85643a4', title: 'PATENT_TITLE_3969' },
        { id: '21a801bc-6616-487f-940c-58a78fa4ef16', title: 'PATENT_TITLE_6783' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App