import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'efad1461-bc0f-4c07-bd31-56bc7355f3da', title: 'PATENT_TITLE_7544' },
        { id: '409781f9-6465-46ce-9e82-0f724def34db', title: 'PATENT_TITLE_1757' },
        { id: '14900592-525f-4877-a50f-4e454d72352d', title: 'PATENT_TITLE_9385' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App