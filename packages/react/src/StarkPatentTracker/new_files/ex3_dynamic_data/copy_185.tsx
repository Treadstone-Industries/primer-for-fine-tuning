import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0cfbcf57-6a2a-401a-9a47-416124c7fe3e', title: 'PATENT_TITLE_9284' },
        { id: 'a4885391-6758-4afd-85e4-eac17db93c5d', title: 'PATENT_TITLE_4575' },
        { id: 'afb3b8f3-0813-4e29-9c52-befa3dab141b', title: 'PATENT_TITLE_6557' },
        { id: '59d0b622-2b77-4d8d-9745-16262b53274c', title: 'PATENT_TITLE_7681' },
        { id: '89f462fa-2597-46a3-a292-f92b45df0dda', title: 'PATENT_TITLE_5567' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App