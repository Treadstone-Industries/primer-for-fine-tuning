import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '83a8364e-ad4a-4719-ae7b-c11c74abb2fd', title: 'PATENT_TITLE_1135' },
        { id: '200d2ab0-c8a9-42b9-8181-2a83e6360213', title: 'PATENT_TITLE_7199' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App