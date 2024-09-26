import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'bb2af64d-9023-4dbe-9bd0-64971722810f', title: 'PATENT_TITLE_5126' },
        { id: '563495dc-3e92-4b41-8fba-0be8f5808d55', title: 'PATENT_TITLE_1504' },
        { id: '67e27b60-af79-4e69-b53c-4d7249665cce', title: 'PATENT_TITLE_8024' },
        { id: 'f6c212bb-d492-4a1f-8cde-3d8277a33b2a', title: 'PATENT_TITLE_5485' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App