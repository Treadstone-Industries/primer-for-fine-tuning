import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'd56bc633-b57b-43d0-a358-0cd0391a43a6', title: 'PATENT_TITLE_8535' },
        { id: '447bf7d0-a0a4-4f03-ad7d-642beb2c7b14', title: 'PATENT_TITLE_8435' },
        { id: '57019656-39f7-40db-88ab-a4a3ab101aaf', title: 'PATENT_TITLE_5943' },
        { id: '17014c4d-81f4-4fad-9627-048ad38c363b', title: 'PATENT_TITLE_5110' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App