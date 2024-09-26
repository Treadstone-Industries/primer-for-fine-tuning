import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ac12fb54-3316-4356-90ad-e2d6f708793a', title: 'PATENT_TITLE_2629' },
        { id: 'b0d98256-1012-4dcf-bcd3-b6141f5bd902', title: 'PATENT_TITLE_1285' },
        { id: '2789b3d8-6159-4e6e-9ea9-e13246093f15', title: 'PATENT_TITLE_8367' },
        { id: '893548c7-3403-4e0a-83e4-05d8a9dd4796', title: 'PATENT_TITLE_8385' },
        { id: 'bf7bf44f-5354-41ac-ba9d-04a191998ba4', title: 'PATENT_TITLE_3617' },
        { id: '4da59b41-cebf-46e8-b08e-6112894d695b', title: 'PATENT_TITLE_7902' },
        { id: '4375703f-d790-497b-97a3-cef4baf650ea', title: 'PATENT_TITLE_1390' },
        { id: 'a6c0cb2e-49fb-42f6-8593-41ed256dc99d', title: 'PATENT_TITLE_3557' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App