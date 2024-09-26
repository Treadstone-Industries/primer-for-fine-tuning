import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b78411c3-d919-4292-af93-c6ff5f969a4e', title: 'PATENT_TITLE_2889' },
        { id: 'b5c083ae-76df-4675-a41b-f88d9b76aa04', title: 'PATENT_TITLE_5141' },
        { id: 'cc266f9d-16aa-4feb-b859-59d45f4eeab7', title: 'PATENT_TITLE_2657' },
        { id: '01c9a380-9d92-439b-802e-ba0f6ce7265a', title: 'PATENT_TITLE_7607' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App