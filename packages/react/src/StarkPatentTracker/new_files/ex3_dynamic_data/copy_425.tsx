import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '13a033ae-dcb4-4fda-9163-44bde9299c68', title: 'PATENT_TITLE_8776' },
        { id: '19afd2e7-ffa2-4edd-988d-17737c73a45a', title: 'PATENT_TITLE_4684' },
        { id: '81e5d115-c31d-4881-981d-54f81a5b2e3f', title: 'PATENT_TITLE_2370' },
        { id: '59114aa1-7bb9-492e-b712-ab183696934a', title: 'PATENT_TITLE_6610' },
        { id: '4a81dae5-3c3e-48af-98eb-98ee66a9b051', title: 'PATENT_TITLE_8860' },
        { id: '6765e0c3-c720-44a1-894a-a06a50f6f91d', title: 'PATENT_TITLE_6710' },
        { id: '7f4970e0-dd7f-4aa3-8f92-c6e5175dba8a', title: 'PATENT_TITLE_3928' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App