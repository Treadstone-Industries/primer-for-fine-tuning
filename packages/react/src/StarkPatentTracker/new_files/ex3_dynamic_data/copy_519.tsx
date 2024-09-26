import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '49d31418-8411-4c59-bfba-6aa11d8e382d', title: 'PATENT_TITLE_7448' },
        { id: 'e3e6d679-f34d-4bc6-a130-5bd0a8615aa5', title: 'PATENT_TITLE_7828' },
        { id: '27091585-f417-4300-a813-cb64fe38a4fa', title: 'PATENT_TITLE_3848' },
        { id: '2f140e06-0e5c-4650-829c-99967d3b9b58', title: 'PATENT_TITLE_9136' },
        { id: '7f0b5a15-417e-4e2b-a8f6-00db4ce5ff75', title: 'PATENT_TITLE_8701' },
        { id: '70ebd34e-9ffb-4ebd-83c2-4ef960c52f51', title: 'PATENT_TITLE_6670' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App