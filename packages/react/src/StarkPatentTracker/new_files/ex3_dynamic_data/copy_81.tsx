import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '44b3ed51-e0ca-41a5-84e6-87ceb4f33048', title: 'PATENT_TITLE_5147' },
        { id: 'e1b62e9f-1aa9-4d5e-b283-8cc612826d60', title: 'PATENT_TITLE_3873' },
        { id: '8b710d44-e3a6-4ad5-b582-5c0b5eefe78d', title: 'PATENT_TITLE_5852' },
        { id: '3140bad1-4871-4483-9dc4-8e64573b5b97', title: 'PATENT_TITLE_1245' },
        { id: 'aaec999c-c07c-4f50-acf9-6a26414a94d4', title: 'PATENT_TITLE_4439' },
        { id: '5406c2b0-4897-4b00-9b2a-326e69e2105c', title: 'PATENT_TITLE_5160' },
        { id: 'bc2322d6-0fe7-40b3-aa1b-cee63dbaa2cf', title: 'PATENT_TITLE_3496' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App