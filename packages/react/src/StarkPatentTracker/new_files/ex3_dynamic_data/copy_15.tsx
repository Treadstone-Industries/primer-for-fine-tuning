import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b1af6eab-4453-48b2-b85c-d2e71ffe9daf', title: 'PATENT_TITLE_1871' },
        { id: '315be018-bdc8-4f9f-9be3-6e8a7616f29a', title: 'PATENT_TITLE_7705' },
        { id: 'de7a7a34-6402-45d5-acf8-f571de07a594', title: 'PATENT_TITLE_8507' },
        { id: '9d739fd7-7aba-4dd4-a4ad-9c72650f028f', title: 'PATENT_TITLE_6189' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App