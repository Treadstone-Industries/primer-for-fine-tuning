import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '89a001b5-dc49-4c07-9c16-320360a7b4ed', title: 'PATENT_TITLE_4398' },
        { id: '5ec92d54-da02-4a04-a000-b3d58b27de9a', title: 'PATENT_TITLE_4681' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App