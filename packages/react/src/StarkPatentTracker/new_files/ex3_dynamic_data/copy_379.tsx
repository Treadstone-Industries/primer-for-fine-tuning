import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'bdff99ff-0347-4751-a8cd-23c61577f5bf', title: 'PATENT_TITLE_3839' },
        { id: '793df9bd-2a91-4675-83fe-3a135ae05f07', title: 'PATENT_TITLE_9255' },
        { id: 'd8685b8b-762d-4fba-8c25-ece4d08d5614', title: 'PATENT_TITLE_3364' },
        { id: '0ebbadbf-1188-46d5-9e70-a16bcd0e529b', title: 'PATENT_TITLE_7032' },
        { id: '994fe257-3d9e-41ba-bb88-1e2e8a22ce19', title: 'PATENT_TITLE_2947' },
        { id: 'b837c341-34eb-4c75-ad51-311cac539555', title: 'PATENT_TITLE_3617' },
        { id: 'f8e5e143-ec17-4b70-8184-804913853cd3', title: 'PATENT_TITLE_6901' },
        { id: '9366cfcd-757d-47ea-8b4b-07906955de75', title: 'PATENT_TITLE_9578' },
        { id: 'e0bb7a76-bffc-4f67-96e9-4c7f9f29a8e4', title: 'PATENT_TITLE_4333' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App