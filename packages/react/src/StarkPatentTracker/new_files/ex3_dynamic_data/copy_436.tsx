import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '57b48e5c-8a52-4f7d-bf9f-e7e994977de4', title: 'PATENT_TITLE_4785' },
        { id: '92ef9277-5279-47ee-a175-41ddcde42d50', title: 'PATENT_TITLE_9935' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App