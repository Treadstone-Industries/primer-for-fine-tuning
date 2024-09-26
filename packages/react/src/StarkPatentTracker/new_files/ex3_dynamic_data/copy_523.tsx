import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '537cf2f0-909b-41be-b0aa-06e7c8eb7c81', title: 'PATENT_TITLE_8330' },
        { id: 'bcbcbd16-0b84-498d-8a44-7c9cf5476842', title: 'PATENT_TITLE_2603' },
        { id: '70a784ee-f7ec-462d-9641-6092e2bf23ba', title: 'PATENT_TITLE_3414' },
        { id: 'b727d8a0-c8a6-4e20-a8e0-eddcb10f1bbb', title: 'PATENT_TITLE_2503' },
        { id: 'c527c27c-fae5-47a5-83bf-9e5bc9e6f84a', title: 'PATENT_TITLE_9447' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App