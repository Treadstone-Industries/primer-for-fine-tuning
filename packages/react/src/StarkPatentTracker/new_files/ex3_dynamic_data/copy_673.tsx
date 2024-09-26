import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'f9d7bfa2-6b22-4a8b-aae2-5d04f81538e2', title: 'PATENT_TITLE_1342' },
        { id: '257a1bb3-7b5a-4ebf-a43e-4269a7b410dd', title: 'PATENT_TITLE_4586' },
        { id: '02ed53de-4ae8-4814-8381-37fe8e5fb26c', title: 'PATENT_TITLE_5904' },
        { id: '2c011f4c-62f8-4b9d-a284-f62cfcb16101', title: 'PATENT_TITLE_9473' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App