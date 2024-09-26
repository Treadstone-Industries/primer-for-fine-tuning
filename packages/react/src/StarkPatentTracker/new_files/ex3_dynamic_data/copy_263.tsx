import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '8bd5e3ed-56f7-4dc4-81fd-d4bc7a2f5fc0', title: 'PATENT_TITLE_1285' },
        { id: '53669ffc-b570-4bbc-aad2-36b0c485cab6', title: 'PATENT_TITLE_9378' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App