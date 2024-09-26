import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a0a6d0be-39a5-4cc7-b90a-0a9120514c66', title: 'PATENT_TITLE_9578' },
        { id: '231a652a-9f7a-4e1a-8218-08b0650b76e7', title: 'PATENT_TITLE_2029' },
        { id: 'b3532f63-f5fc-4f0c-9a3b-d9c33835ccf7', title: 'PATENT_TITLE_1805' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App