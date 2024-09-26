import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '4e18bca8-8e9e-4454-a85e-f2b85577b21c', title: 'PATENT_TITLE_9588' },
        { id: 'e510e165-6b3e-4521-a04f-a6ba69a09e40', title: 'PATENT_TITLE_1135' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App