import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'c797fb66-0357-433e-b458-7314065ba4b4', title: 'PATENT_TITLE_9057' },
        { id: '1019e3d0-6fd5-4f6e-b36a-f4d3ff23572e', title: 'PATENT_TITLE_2752' },
        { id: 'dcd3cbe6-055c-4b6c-83e0-9ec588aae53c', title: 'PATENT_TITLE_3519' },
        { id: '6c3761b6-5234-4523-9861-5cf9d436f7b6', title: 'PATENT_TITLE_7587' },
        { id: '65b12972-41f9-4cd7-ab65-077c8aff5f71', title: 'PATENT_TITLE_1259' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App