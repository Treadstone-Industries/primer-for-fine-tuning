import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'eb242dba-853f-4eb6-87ad-8cdbfa35eb81', title: 'PATENT_TITLE_8750' },
        { id: 'df4cc21a-8417-44c5-954b-8e1d53838e46', title: 'PATENT_TITLE_4659' },
        { id: '2c81c42f-4cbc-4709-84e0-5b86c3c9ad65', title: 'PATENT_TITLE_2744' },
        { id: 'cd2e9977-40a0-4919-a9cc-e1592c5554c3', title: 'PATENT_TITLE_6111' },
        { id: '6e3e55ac-be12-409b-b207-8d9c1f7c5930', title: 'PATENT_TITLE_5789' },
        { id: '19c15d6c-4500-487f-a678-3f0e442a1e13', title: 'PATENT_TITLE_7866' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App