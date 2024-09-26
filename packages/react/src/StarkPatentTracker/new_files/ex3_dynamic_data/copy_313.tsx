import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'fcfe207d-6500-40a7-b06e-0ace4cf4effb', title: 'PATENT_TITLE_7488' },
        { id: 'c5c21e01-0b69-44d1-89a0-d0a711b9ef4c', title: 'PATENT_TITLE_4204' },
        { id: '002429fb-54b0-4428-bb86-615c8733b5e9', title: 'PATENT_TITLE_8906' },
        { id: '6f028866-afb6-44c4-98af-44a276f5943d', title: 'PATENT_TITLE_1745' },
        { id: '14d8550b-9019-4eb2-ad67-7ce911a72eaa', title: 'PATENT_TITLE_8023' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App