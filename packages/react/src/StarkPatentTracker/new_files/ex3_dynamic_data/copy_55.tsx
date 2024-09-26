import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'de1a1914-10c6-4f5e-817d-1398c7d12cb4', title: 'PATENT_TITLE_8112' },
        { id: '196e7fc3-05c5-4e23-bc7a-92456c57ba07', title: 'PATENT_TITLE_4028' },
        { id: 'c6e29cff-fe48-44af-860a-e1fb35b002b7', title: 'PATENT_TITLE_4033' },
        { id: '877b77cd-eac9-499d-8b4c-dce2cabf5ce0', title: 'PATENT_TITLE_9023' },
        { id: '534f37b7-22f8-47c3-bc64-cd5f01403377', title: 'PATENT_TITLE_4616' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App