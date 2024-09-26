import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '14591e36-24fa-4909-bd8b-a2e7a7fde44b', title: 'PATENT_TITLE_6581' },
        { id: '532bfea6-8792-427c-bec5-132d4c9f8a2c', title: 'PATENT_TITLE_1458' },
        { id: '0a145ec2-27f3-4d4f-849c-28b7968056c0', title: 'PATENT_TITLE_3457' },
        { id: 'edf5384b-b5e9-48b5-8f3c-93a27f659dd1', title: 'PATENT_TITLE_5911' },
        { id: 'f7936964-aa75-41d5-994a-8c7d867d58e4', title: 'PATENT_TITLE_2698' },
        { id: 'e68486bb-6b38-479d-941a-9077f4c6350d', title: 'PATENT_TITLE_4448' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App