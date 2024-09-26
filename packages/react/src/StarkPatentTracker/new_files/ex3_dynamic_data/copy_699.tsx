import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '33b39da0-fa5c-4eb2-9f2f-f1b3147947c0', title: 'PATENT_TITLE_9401' },
        { id: '78456841-dc61-4e53-877b-5ea58f68c614', title: 'PATENT_TITLE_1910' },
        { id: '6bda04f4-06ee-4eb4-a16b-530c753033f3', title: 'PATENT_TITLE_8947' },
        { id: '8430f325-8062-482b-a063-672cb79fb2e4', title: 'PATENT_TITLE_6685' },
        { id: '48e636ef-8700-4ce6-bffb-f0a78484616d', title: 'PATENT_TITLE_2810' },
        { id: 'e63d9fa2-6fda-446d-8a33-517d373bd6cb', title: 'PATENT_TITLE_1986' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App