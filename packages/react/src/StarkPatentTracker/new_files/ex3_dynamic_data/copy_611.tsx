import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '930d5f6e-7814-45ea-9273-56c4a91a49d7', title: 'PATENT_TITLE_5095' },
        { id: '08e29a9d-73c4-4409-8cfa-b134d59a051e', title: 'PATENT_TITLE_3335' },
        { id: 'b0c257d3-9fb8-4793-8e9d-1b8b1103736e', title: 'PATENT_TITLE_8556' },
        { id: '5c7c6b29-5862-4d4d-aefe-dd3ee6d71141', title: 'PATENT_TITLE_5457' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App