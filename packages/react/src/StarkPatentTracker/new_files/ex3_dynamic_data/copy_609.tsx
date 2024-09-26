import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'd096ed3e-0728-4c0e-9c0a-a1fcb7ccd9af', title: 'PATENT_TITLE_9810' },
        { id: 'df9fe93e-f660-4703-b35c-96b795ca26bc', title: 'PATENT_TITLE_3107' },
        { id: 'cdae71b4-f829-4286-a81b-158a06b329d0', title: 'PATENT_TITLE_9488' },
        { id: 'fd951ce7-0303-4858-8fb6-e68953c70d8f', title: 'PATENT_TITLE_4436' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App