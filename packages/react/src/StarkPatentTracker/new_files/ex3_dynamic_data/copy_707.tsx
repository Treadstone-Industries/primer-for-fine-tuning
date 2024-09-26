import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '8003a035-f12a-47d2-8dc7-4e42177efeca', title: 'PATENT_TITLE_8632' },
        { id: '7dd5c5f2-b8e3-41d8-b1a2-f7f8838a93e7', title: 'PATENT_TITLE_9263' },
        { id: '7551c408-7595-48fa-aa17-db8f66cd803e', title: 'PATENT_TITLE_8507' },
        { id: '34b3f7a9-898e-400f-97ea-ef5aab27f803', title: 'PATENT_TITLE_4900' },
        { id: '6da46437-8637-4d4b-b70a-eef1dcfa70cd', title: 'PATENT_TITLE_4920' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App