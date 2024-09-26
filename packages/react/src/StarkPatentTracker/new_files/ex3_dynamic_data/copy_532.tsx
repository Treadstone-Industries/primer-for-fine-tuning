import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '84b9d55c-ab7c-4f45-8796-71ad61b8d8de', title: 'PATENT_TITLE_1333' },
        { id: '1e8819a5-da36-4c60-a446-57aa3db67a01', title: 'PATENT_TITLE_5409' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App