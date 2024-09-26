import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'eb2deba2-3631-4ad9-a89c-4a0f82369a46', title: 'PATENT_TITLE_4873' },
        { id: '448ca5ff-f1c3-4474-9400-d2349ec74e4b', title: 'PATENT_TITLE_4536' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App