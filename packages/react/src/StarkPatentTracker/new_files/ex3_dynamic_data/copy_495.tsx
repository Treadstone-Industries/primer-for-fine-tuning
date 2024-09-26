import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'c3bf82d4-227b-4fb4-b3e4-b356fbcbe29b', title: 'PATENT_TITLE_8488' },
        { id: '66b8200c-bf7f-4ff7-abc4-651dc31f48ff', title: 'PATENT_TITLE_8406' },
        { id: '969604f3-1911-4e16-b921-01b8be05972e', title: 'PATENT_TITLE_8274' },
        { id: '287b42ff-a9f9-4e21-82fb-c838a93822de', title: 'PATENT_TITLE_4842' },
        { id: 'ed15266a-a4d2-4112-922b-0e639c431464', title: 'PATENT_TITLE_5313' },
        { id: '31fb69d9-8eb8-4a9d-9669-672b7362176b', title: 'PATENT_TITLE_4975' },
        { id: '9c3563fc-4875-47a7-9d1f-202123bf9d43', title: 'PATENT_TITLE_8523' },
        { id: 'c064673c-cd19-49ee-8450-3f25798e01d1', title: 'PATENT_TITLE_5285' },
        { id: '3c735989-d99a-4f9a-b653-77f4608b9a2d', title: 'PATENT_TITLE_5973' },
        { id: 'd137c2fc-2b70-4daa-a0ed-f913b8bb95e5', title: 'PATENT_TITLE_8601' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App