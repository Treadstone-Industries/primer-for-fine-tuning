import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '225372c9-743f-4a79-b272-ceca47dcc1f0', title: 'PATENT_TITLE_2351' },
        { id: 'eb2a5e4a-7936-4bbc-8b8f-206d16fe4dea', title: 'PATENT_TITLE_2569' },
        { id: '6967e67e-bffa-43b6-976b-b2882b75ea81', title: 'PATENT_TITLE_7105' },
        { id: 'a44af4a7-e456-4445-8fb6-fa97f1a57ed2', title: 'PATENT_TITLE_5110' },
        { id: '72b30f46-5d7e-42b6-a52f-707f65e11143', title: 'PATENT_TITLE_5850' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App