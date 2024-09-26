import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'd03135df-83c2-45eb-a133-a0d078d42c8f', title: 'PATENT_TITLE_7806' },
        { id: '8a7381e2-d71e-411f-bea3-36e9750101cd', title: 'PATENT_TITLE_1734' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App