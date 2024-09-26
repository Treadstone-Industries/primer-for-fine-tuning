import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'dc2b8cf8-926d-4a64-a33d-49054987195d', title: 'PATENT_TITLE_5721' },
        { id: '82c44561-ad0b-4742-89ae-45fdd1fd8114', title: 'PATENT_TITLE_8926' },
        { id: '110deab3-4986-4c68-b0d5-0783da2cb981', title: 'PATENT_TITLE_4176' },
        { id: 'cc79aa19-b50d-48d2-b392-3b076491cd5c', title: 'PATENT_TITLE_5433' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App