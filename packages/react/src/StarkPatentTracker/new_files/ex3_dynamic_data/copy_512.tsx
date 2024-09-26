import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '7b6fdac7-2690-4354-b854-b3d3ad058e03', title: 'PATENT_TITLE_7119' },
        { id: '2c96371c-521e-4316-8f5b-f3b9e5acdb57', title: 'PATENT_TITLE_3120' },
        { id: '50a5358a-355d-400c-bf5d-8decbabb346e', title: 'PATENT_TITLE_3492' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App