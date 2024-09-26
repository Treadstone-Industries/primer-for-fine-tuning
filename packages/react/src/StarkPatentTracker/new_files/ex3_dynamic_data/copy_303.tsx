import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'd6d44cad-40fa-4744-868f-b4813ee69f28', title: 'PATENT_TITLE_3869' },
        { id: 'c8152c6a-7f40-47e2-a330-2b680eb23e2b', title: 'PATENT_TITLE_2945' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App