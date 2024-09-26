import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '879ce9ce-9f01-4cc8-bfe4-a43ec7dc72ae', title: 'PATENT_TITLE_6370' },
        { id: '14947d96-a9cd-4abb-aa34-5f16c09fa2c4', title: 'PATENT_TITLE_9731' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App