import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '49fb64da-15a7-48b5-94b3-5b35280798de', title: 'PATENT_TITLE_3480' },
        { id: '16128f37-b187-4e8b-a9f2-387ef3c73a8f', title: 'PATENT_TITLE_4649' },
        { id: '18593a1c-35fc-40af-805b-43c5d0ef1feb', title: 'PATENT_TITLE_8242' },
        { id: '001505d0-5a01-4ed7-b7d8-29f6756c848e', title: 'PATENT_TITLE_9069' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App