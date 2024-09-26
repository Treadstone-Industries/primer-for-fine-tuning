import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'cb735567-9f96-4268-8376-ad71d8874208', title: 'PATENT_TITLE_1485' },
        { id: '8cc33bb8-eeb3-4c0a-899e-9ab639f4d3f7', title: 'PATENT_TITLE_8770' },
        { id: '0aa9fae9-bd95-47d4-a788-e3fcaabaeee0', title: 'PATENT_TITLE_5970' },
        { id: 'cc79a96b-8baa-48f9-9d59-dbff154b6ac1', title: 'PATENT_TITLE_2529' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App