import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '86b9ad84-ee6b-44c4-8a4d-119203eab3df', title: 'PATENT_TITLE_5003' },
        { id: '8b7f9771-512d-4891-8b30-e748f4492d96', title: 'PATENT_TITLE_7549' },
        { id: '1f1213de-adc1-4639-a2ea-8d9a70d8b6c8', title: 'PATENT_TITLE_4182' },
        { id: '215cbcf3-8a4b-4b39-ae44-7a592bd6a490', title: 'PATENT_TITLE_5464' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App