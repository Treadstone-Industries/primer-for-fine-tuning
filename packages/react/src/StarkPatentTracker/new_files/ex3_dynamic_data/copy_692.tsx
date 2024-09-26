import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '9d9859b3-f9a7-42b5-9d77-c428c0a09038', title: 'PATENT_TITLE_5626' },
        { id: '1c0a7ae0-7f8e-4fb3-b63b-3d19a01a2ef9', title: 'PATENT_TITLE_2061' },
        { id: 'a2e71ae7-d22f-4a98-a5d8-b589fabf36e8', title: 'PATENT_TITLE_2355' },
        { id: '6f5ba41a-a1a0-4a09-88b9-be6f806b62b4', title: 'PATENT_TITLE_6487' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App