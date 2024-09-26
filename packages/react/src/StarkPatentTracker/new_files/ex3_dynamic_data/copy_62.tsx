import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '968481fb-9716-4bac-beef-88e78200830a', title: 'PATENT_TITLE_8494' },
        { id: '691e0fda-d5a6-4b71-b809-01d933642754', title: 'PATENT_TITLE_6858' },
        { id: '2d655102-d0ec-4da2-a9e0-339af8fbd95a', title: 'PATENT_TITLE_6431' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App