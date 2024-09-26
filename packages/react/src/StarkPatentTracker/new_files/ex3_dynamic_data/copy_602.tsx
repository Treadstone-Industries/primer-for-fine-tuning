import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '8fedb05a-1563-444f-ac70-256c906f632a', title: 'PATENT_TITLE_5510' },
        { id: 'cf253db8-1887-4a80-bd00-4fc634d02e7e', title: 'PATENT_TITLE_7997' },
        { id: '0497cb8a-dff1-466b-ac59-8e739852409f', title: 'PATENT_TITLE_8241' },
        { id: '0f0e81b1-b233-4772-b724-30818f70a3d2', title: 'PATENT_TITLE_9223' },
        { id: 'f1b494e0-5e86-4cc7-a6ac-00f8e8988c5d', title: 'PATENT_TITLE_5171' },
        { id: '6425ffbd-6eff-46f0-8e87-03d1b2c41812', title: 'PATENT_TITLE_3951' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App