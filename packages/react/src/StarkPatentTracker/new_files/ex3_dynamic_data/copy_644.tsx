import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '7567c5d4-8478-400b-9119-8ec30bf99eb1', title: 'PATENT_TITLE_2096' },
        { id: '323f33a7-2f42-47a0-8238-5c9b443cabf7', title: 'PATENT_TITLE_1331' },
        { id: '18790f0c-acbc-4e84-8509-a35063a62be0', title: 'PATENT_TITLE_3112' },
        { id: 'e894c81e-beb9-4a40-8247-f088bc864622', title: 'PATENT_TITLE_9032' },
        { id: '37a2bc1d-1a1a-4471-a22c-4679ecb09c21', title: 'PATENT_TITLE_7974' },
        { id: '3623188f-5fd5-4958-bbe9-9519269b5b97', title: 'PATENT_TITLE_8181' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App