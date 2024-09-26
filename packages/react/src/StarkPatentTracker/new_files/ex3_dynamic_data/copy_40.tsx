import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '65a5016f-060a-4ae6-a56c-3b8f2f21ffd2', title: 'PATENT_TITLE_9278' },
        { id: '60d6a5af-6a6f-41f6-94c9-1baeea7d41bb', title: 'PATENT_TITLE_3634' },
        { id: 'a46a7870-8577-4a31-ac0a-680f2c4a7ab4', title: 'PATENT_TITLE_9160' },
        { id: '41d4c044-96bb-478d-a3a9-257b7ce9b1ee', title: 'PATENT_TITLE_4991' },
        { id: '82983d65-de0b-4c7d-935f-970918f3140b', title: 'PATENT_TITLE_9801' },
        { id: 'bc9335fa-f74d-40b6-b4b0-d6ca6a0f6110', title: 'PATENT_TITLE_2356' },
        { id: '6166cf0b-d5e6-4c89-af56-557462e9c833', title: 'PATENT_TITLE_9978' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App