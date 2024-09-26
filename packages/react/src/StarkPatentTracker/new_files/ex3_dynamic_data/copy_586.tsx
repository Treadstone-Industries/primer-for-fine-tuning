import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a3f4c1ee-01de-41ca-aee3-95ba0fe22975', title: 'PATENT_TITLE_9502' },
        { id: '9e0ba0e5-8eb1-49eb-b9c3-ea562e505fbd', title: 'PATENT_TITLE_5947' },
        { id: 'fc679e35-874a-42ab-bb23-9feac0e20aa3', title: 'PATENT_TITLE_9019' },
        { id: 'd8025e14-8901-4d13-b448-f58e3e725ff4', title: 'PATENT_TITLE_1270' },
        { id: 'f6789a84-f0f8-4a28-be78-af1d43fe38c5', title: 'PATENT_TITLE_6802' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App