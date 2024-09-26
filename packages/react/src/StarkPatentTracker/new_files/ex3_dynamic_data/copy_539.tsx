import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'c06ba14d-3ce3-4689-979a-7c0da019527c', title: 'PATENT_TITLE_1896' },
        { id: 'a88d90d2-b234-4abd-afac-b556b5cb6b11', title: 'PATENT_TITLE_3438' },
        { id: '3fef909a-083a-405a-b162-a71ef3159318', title: 'PATENT_TITLE_8346' },
        { id: 'a4c78924-0e48-4cc2-a0bd-c5ba6d57b2f5', title: 'PATENT_TITLE_9898' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App