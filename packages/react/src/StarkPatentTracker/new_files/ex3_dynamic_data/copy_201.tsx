import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'c90e81f6-3071-4d56-b03f-e30f25d2ef5c', title: 'PATENT_TITLE_4406' },
        { id: '14913d5d-f743-4cd4-be8b-4900a8548d13', title: 'PATENT_TITLE_2155' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App