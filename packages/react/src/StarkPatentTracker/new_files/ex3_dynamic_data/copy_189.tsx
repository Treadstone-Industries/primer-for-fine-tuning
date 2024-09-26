import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '934e10f6-9b79-4609-b09a-582cef50ead1', title: 'PATENT_TITLE_8981' },
        { id: 'dc0c9198-217a-43ba-b64b-fc6a207a21a8', title: 'PATENT_TITLE_8082' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App