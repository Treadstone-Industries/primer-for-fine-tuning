import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '538166bb-8606-4850-9628-6cc2d7e6b9b1', title: 'PATENT_TITLE_8923' },
        { id: '404927d3-15bb-4221-a958-722f456dff04', title: 'PATENT_TITLE_8392' },
        { id: '05c2e574-55bf-4185-8c6a-d61a18f8bda9', title: 'PATENT_TITLE_2356' },
        { id: 'e3c66c03-c4ab-4f8d-a605-751e3cc0a413', title: 'PATENT_TITLE_6822' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App