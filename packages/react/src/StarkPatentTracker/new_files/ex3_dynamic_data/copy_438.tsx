import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '08031f1b-8210-4205-9622-0670a8f04654', title: 'PATENT_TITLE_5348' },
        { id: '208d7549-4631-40ab-83ed-708cb078f29b', title: 'PATENT_TITLE_1246' },
        { id: '9c24f6fd-738c-45dc-b363-edc0e4650cb5', title: 'PATENT_TITLE_4323' },
        { id: '0840a71f-6f87-48f7-ab4c-7e29486d2958', title: 'PATENT_TITLE_8311' },
        { id: '8d901c67-a1ee-47d5-ba62-9e16c22a2a74', title: 'PATENT_TITLE_7998' },
        { id: '11db32bd-542c-465a-89e3-ab2a2444d583', title: 'PATENT_TITLE_2736' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App