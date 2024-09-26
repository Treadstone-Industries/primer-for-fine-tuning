import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '375bc9ff-8143-4f87-b152-e9a9d88ff956', title: 'PATENT_TITLE_2824' },
        { id: '87ad04d2-0075-44eb-9c90-5f06d4fd14bf', title: 'PATENT_TITLE_9388' },
        { id: 'f586df93-3c56-4ee2-95d8-5c4af7e4dc06', title: 'PATENT_TITLE_6290' },
        { id: '88716750-d8e4-44c8-99b9-82e92713f2d5', title: 'PATENT_TITLE_2229' },
        { id: '48bcd1a6-9091-4bce-b425-6141dfa38d65', title: 'PATENT_TITLE_6709' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App