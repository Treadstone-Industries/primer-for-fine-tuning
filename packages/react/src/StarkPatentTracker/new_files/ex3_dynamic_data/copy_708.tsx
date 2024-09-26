import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '269b1186-9c96-401c-8bc3-7058b7f1ef87', title: 'PATENT_TITLE_9675' },
        { id: '9ad98473-0983-4a62-920e-523576069c9f', title: 'PATENT_TITLE_4977' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App