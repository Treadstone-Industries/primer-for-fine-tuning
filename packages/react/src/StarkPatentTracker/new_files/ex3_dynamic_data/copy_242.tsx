import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '008cd52a-6969-4cfd-a0a5-a5e2e511f896', title: 'PATENT_TITLE_8981' },
        { id: '227f87bd-fd2a-47c4-ad2d-9acba0ce2943', title: 'PATENT_TITLE_4557' },
        { id: '86ea5f9f-e43a-48ba-afe7-acf8356cbd65', title: 'PATENT_TITLE_9846' },
        { id: '9ef7eea4-4632-4748-b424-6ab225871311', title: 'PATENT_TITLE_2170' },
        { id: '030049e4-f7f1-424c-847b-6a619511f2b8', title: 'PATENT_TITLE_4760' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App