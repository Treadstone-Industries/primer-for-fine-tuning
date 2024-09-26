import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0d5ac780-789d-4e59-a95f-403c96058422', title: 'PATENT_TITLE_5310' },
        { id: '62d53808-1ea2-41d9-9203-35068f911904', title: 'PATENT_TITLE_7538' },
        { id: 'bed5892d-b588-4f39-b2a4-4c39735800e4', title: 'PATENT_TITLE_4383' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App