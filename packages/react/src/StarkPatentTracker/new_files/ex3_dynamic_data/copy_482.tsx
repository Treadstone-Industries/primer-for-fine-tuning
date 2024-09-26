import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'f8eedd34-d668-4479-8ce0-80af7aba6847', title: 'PATENT_TITLE_7688' },
        { id: 'b7170e47-d279-4831-ad85-74873bd33d8c', title: 'PATENT_TITLE_8651' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App