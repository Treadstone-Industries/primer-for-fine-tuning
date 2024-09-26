import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '05058965-0c21-4729-807a-4455f413a8f7', title: 'PATENT_TITLE_5287' },
        { id: '2bd5adb2-ea36-4a2a-a678-d66d44e4ea67', title: 'PATENT_TITLE_2841' },
        { id: '7d202244-a2d7-4aeb-bc95-0a63a77bc8a1', title: 'PATENT_TITLE_1491' },
        { id: '0dae3186-4d38-4fd5-8cc8-3a98c71106d8', title: 'PATENT_TITLE_3006' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App