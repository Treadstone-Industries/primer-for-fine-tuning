import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '04fb0a52-f9bf-443c-a753-02ced831e862', title: 'PATENT_TITLE_5222' },
        { id: '6d4798fa-63d3-470e-8d3b-f71b3bcff0f2', title: 'PATENT_TITLE_5790' },
        { id: 'ca7c30b4-f0f2-403e-909d-b61575568383', title: 'PATENT_TITLE_7190' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App