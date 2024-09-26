import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ae2fce15-5920-48c4-97c0-e84d2198fd55', title: 'PATENT_TITLE_3577' },
        { id: '8395bc0d-96c6-4e1a-b9f8-aea40e8678ad', title: 'PATENT_TITLE_9182' },
        { id: 'd81d51ec-0f97-4ff4-8a13-225417161597', title: 'PATENT_TITLE_6310' },
        { id: 'a8c7fe1b-18e0-4a87-80ac-e7a64f85470c', title: 'PATENT_TITLE_9885' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App