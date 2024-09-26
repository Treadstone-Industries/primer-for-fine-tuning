import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'cea41fa0-fa56-4419-a8a3-501072ea67c2', title: 'PATENT_TITLE_6760' },
        { id: 'e8dd62f6-fff6-4da0-9d7d-aa12dec8d5fe', title: 'PATENT_TITLE_1246' },
        { id: '68e9dac3-752b-42b8-ad93-471383acf9df', title: 'PATENT_TITLE_1616' },
        { id: '9235018b-b285-4c36-b059-8598de76cdb0', title: 'PATENT_TITLE_3122' },
        { id: '4571a54c-f801-4257-91c5-c2be5d18dec5', title: 'PATENT_TITLE_2326' },
        { id: '1a74a703-e678-4efd-8b43-3948a831f5ad', title: 'PATENT_TITLE_3894' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App