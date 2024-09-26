import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '6eb467a3-5a0e-49c5-942c-e9141bde604d', title: 'PATENT_TITLE_9810' },
        { id: '5ad3cdff-76ca-4f16-b064-4f0b636dfbbc', title: 'PATENT_TITLE_3549' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App