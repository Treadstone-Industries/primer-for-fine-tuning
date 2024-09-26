import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'abec76f3-949f-4b1c-9a18-c1e5d754ee7e', title: 'PATENT_TITLE_3923' },
        { id: '78b2268c-df75-4e84-a0e3-9da187a32d03', title: 'PATENT_TITLE_3517' },
        { id: 'bfc86eb8-7a52-4505-ae55-f3e33fab70f4', title: 'PATENT_TITLE_3873' },
        { id: 'f1839bc2-bb3c-42e7-ae2f-cc320542a90d', title: 'PATENT_TITLE_7921' },
        { id: 'bd451df0-c3d2-479e-a908-5f99d0cac229', title: 'PATENT_TITLE_6966' },
        { id: '51fc25ab-c5f8-43b3-b87f-1708c5ef3878', title: 'PATENT_TITLE_3290' },
        { id: '63d22c26-1046-442f-b6e2-7afa02e15908', title: 'PATENT_TITLE_6667' },
        { id: 'eb3944c7-924d-4209-a4b4-4aacd44f04f1', title: 'PATENT_TITLE_4059' },
        { id: 'd73d223a-88e9-4385-ae5e-81da4a102468', title: 'PATENT_TITLE_9394' },
        { id: 'bfd79aef-7252-490b-b0b2-c4e654c7e927', title: 'PATENT_TITLE_8779' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App