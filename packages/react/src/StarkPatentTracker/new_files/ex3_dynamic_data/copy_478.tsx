import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '16ac978e-0acc-4bba-821e-1146dcf53116', title: 'PATENT_TITLE_3177' },
        { id: 'd43c0680-9639-4241-8209-9dfef9678dbe', title: 'PATENT_TITLE_3505' },
        { id: 'c6393cb7-76e9-43fb-8f85-0f9c9703da6e', title: 'PATENT_TITLE_3607' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App