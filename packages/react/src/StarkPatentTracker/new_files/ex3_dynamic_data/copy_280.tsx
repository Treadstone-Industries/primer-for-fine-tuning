import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'c676604a-6792-4645-b610-fba1a5280ea9', title: 'PATENT_TITLE_5861' },
        { id: '3302ed3b-5eb4-49a1-8405-99252de3d94e', title: 'PATENT_TITLE_7263' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App