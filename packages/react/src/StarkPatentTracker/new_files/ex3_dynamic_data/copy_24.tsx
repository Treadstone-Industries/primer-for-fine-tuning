import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '82e83d39-4046-4639-920b-33ea919f8baf', title: 'PATENT_TITLE_2708' },
        { id: 'd4cea3cd-c83f-4a16-be1f-0c9e953c5490', title: 'PATENT_TITLE_1653' },
        { id: '6ef821a8-d565-4d7b-a79b-c4ab9b4a694e', title: 'PATENT_TITLE_5446' },
        { id: '9a63c3c6-bbdf-4a33-ba6a-76fff8167108', title: 'PATENT_TITLE_5014' },
        { id: '170d0ff0-b181-4590-a477-18063a4fafa6', title: 'PATENT_TITLE_5394' },
        { id: '286b1fa1-9547-436a-b82f-ac2f05764907', title: 'PATENT_TITLE_5554' },
        { id: '4746467e-03f3-4f5d-b86f-17a6dc327451', title: 'PATENT_TITLE_1569' },
        { id: 'cece73b6-b3f7-4164-9a5c-d2e581e57558', title: 'PATENT_TITLE_6096' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App