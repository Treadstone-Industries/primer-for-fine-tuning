import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '07b3c46d-6f2f-4ec4-9217-f797f281def7', title: 'PATENT_TITLE_3191' },
        { id: '8d4ec2be-56ce-4502-8f25-b0d8f07ba744', title: 'PATENT_TITLE_2509' },
        { id: '89b865d0-1993-4275-9a46-a142e87c1c32', title: 'PATENT_TITLE_5139' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App