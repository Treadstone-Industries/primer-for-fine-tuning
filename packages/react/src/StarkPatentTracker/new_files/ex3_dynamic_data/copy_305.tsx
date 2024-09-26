import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '2c00c02a-113a-456f-860f-54707abe8744', title: 'PATENT_TITLE_8392' },
        { id: '6eec3da3-0a6e-43a4-a5e2-2eee9e13a2c9', title: 'PATENT_TITLE_9290' },
        { id: 'af6e328b-2cfa-404b-9b96-dfd279acef4a', title: 'PATENT_TITLE_6812' },
        { id: '1c3ec887-6b8c-4eb5-ba2d-a3a54ad049d7', title: 'PATENT_TITLE_4558' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App