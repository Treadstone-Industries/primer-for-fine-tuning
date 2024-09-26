import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '5107b39d-6d45-49db-9c6c-c8ac5f6ef44b', title: 'PATENT_TITLE_1315' },
        { id: '54b8d4b9-b2a6-4096-bb09-7588c92f2927', title: 'PATENT_TITLE_6761' },
        { id: 'f8d851bf-1f6b-4923-a3e3-40d5d92866c4', title: 'PATENT_TITLE_1342' },
        { id: '2159e059-e211-47fc-b18b-bb3de06b7ff1', title: 'PATENT_TITLE_8304' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App