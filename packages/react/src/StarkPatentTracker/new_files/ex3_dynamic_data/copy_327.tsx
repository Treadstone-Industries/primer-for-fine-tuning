import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '01953ddb-d587-416a-aead-97f1255e14fd', title: 'PATENT_TITLE_3083' },
        { id: '35f4ea38-5cff-4808-8826-cde82d664e07', title: 'PATENT_TITLE_3859' },
        { id: 'ead93b53-66eb-4a14-9cb3-e52c09c63131', title: 'PATENT_TITLE_7106' },
        { id: '83064c4f-61a3-4f65-a533-16b26711f7ed', title: 'PATENT_TITLE_3523' },
        { id: 'da38649b-1590-4c4e-8e71-f0f0f623131f', title: 'PATENT_TITLE_9496' },
        { id: '13ad3c2a-c0cf-4b64-87e8-822d3fe43523', title: 'PATENT_TITLE_7680' },
        { id: '28dcfe00-ce66-418d-9195-ffc45dbd70b1', title: 'PATENT_TITLE_9081' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App