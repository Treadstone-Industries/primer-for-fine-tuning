import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '245386d6-0dcc-47f7-a491-c4445656b279', title: 'PATENT_TITLE_4654' },
        { id: '2eba0cde-2fab-4c72-8ac7-8da4e83290b7', title: 'PATENT_TITLE_4647' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App