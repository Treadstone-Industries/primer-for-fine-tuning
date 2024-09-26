import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'd14fbd6f-b228-450b-b04f-590030151138', title: 'PATENT_TITLE_9810' },
        { id: 'f73aa490-3f3c-443f-825e-3c034a119e4f', title: 'PATENT_TITLE_7630' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App