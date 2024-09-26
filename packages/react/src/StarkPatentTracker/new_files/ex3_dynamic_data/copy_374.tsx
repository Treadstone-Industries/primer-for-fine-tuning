import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'bb71b74c-d9d3-4d6f-a626-081ba1752c78', title: 'PATENT_TITLE_4956' },
        { id: '32d7b795-ebcf-4b60-a3b1-9aafd65078f8', title: 'PATENT_TITLE_5031' },
        { id: 'a8a7cbf6-6563-41a6-9d56-4f526d00c459', title: 'PATENT_TITLE_4988' },
        { id: '3ddd6955-0e7c-4dbe-a0c5-df178ee0877c', title: 'PATENT_TITLE_1383' },
        { id: '733fad4c-3ed7-42ef-87be-022d7595489c', title: 'PATENT_TITLE_3675' },
        { id: '9f050b8a-44fb-428e-8b75-dee3c1e16f60', title: 'PATENT_TITLE_4821' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App