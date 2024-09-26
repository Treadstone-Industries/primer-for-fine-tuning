import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '3c8f9a32-102a-42e1-a454-6c10332c5186', title: 'PATENT_TITLE_1840' },
        { id: '3f04ea23-87e0-4f58-a22f-e751227371c8', title: 'PATENT_TITLE_2423' },
        { id: '50f8b038-adee-455d-8e92-538b42f6f6c3', title: 'PATENT_TITLE_6276' },
        { id: '19931fc9-92a2-4cdb-859b-804359ceb500', title: 'PATENT_TITLE_3778' },
        { id: '13479b86-3cbe-4a61-8ba0-440a32894798', title: 'PATENT_TITLE_2922' },
        { id: '1f7c4aa1-b4d5-4e56-af06-222126d4b5b6', title: 'PATENT_TITLE_4158' },
        { id: '9713c2d4-2a4d-48c3-8faf-a387b6fafa1e', title: 'PATENT_TITLE_8694' },
        { id: '7ca54054-e849-4142-a6b0-988c8d7b35cb', title: 'PATENT_TITLE_5933' },
        { id: 'ddfcd2b1-7d87-4499-b5ac-acbca1b28ecf', title: 'PATENT_TITLE_4163' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App