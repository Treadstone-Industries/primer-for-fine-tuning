import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '951c2735-cc28-4dd9-a289-e0ae2b2310fe', title: 'PATENT_TITLE_1818' },
        { id: 'de95a7e0-66cf-4ad2-9f0c-5c4cdc6e19df', title: 'PATENT_TITLE_1124' },
        { id: 'af2c4982-5beb-41f8-8590-23bff7f0c2bd', title: 'PATENT_TITLE_7698' },
        { id: '8fb799a3-bee6-404a-95c1-a042986e5ccb', title: 'PATENT_TITLE_9354' },
        { id: '1b42b3d6-29c2-4bca-83a8-58ea68401a6b', title: 'PATENT_TITLE_2301' },
        { id: '4832e975-52f8-4ce8-bab5-974a6de4b9ff', title: 'PATENT_TITLE_1310' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App