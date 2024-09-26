import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '150a051d-8a16-48b8-927a-f23df4dc9eaa', title: 'PATENT_TITLE_7177' },
        { id: '7e790f8f-88ea-410e-9f8d-58f81dbc397a', title: 'PATENT_TITLE_7361' },
        { id: '08293cc9-837e-4e8b-a742-45c1f3b7159b', title: 'PATENT_TITLE_7746' },
        { id: 'b2c5da0f-058f-4d8e-ba97-8910332132fc', title: 'PATENT_TITLE_6614' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App