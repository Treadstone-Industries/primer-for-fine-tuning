import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'c553c0d7-22cc-4dfa-be25-027bd5eecd11', title: 'PATENT_TITLE_3479' },
        { id: '0c7dd9ec-da98-4b72-92ab-6e78943b25cd', title: 'PATENT_TITLE_1838' },
        { id: '79c26b1a-40ca-4da4-950e-5dba99031430', title: 'PATENT_TITLE_7802' },
        { id: 'b5c7d804-3bc5-4c4e-8218-a98f68a5f590', title: 'PATENT_TITLE_1549' },
        { id: 'f876bd9c-198d-4618-ae8d-78e33d038dd3', title: 'PATENT_TITLE_9692' },
        { id: '428f0bb9-09b6-4b9f-94e6-5cce0eaf0568', title: 'PATENT_TITLE_1608' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App