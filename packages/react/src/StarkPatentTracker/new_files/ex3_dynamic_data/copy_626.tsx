import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '47d04ff7-c400-4fa7-b0e9-7a7bcd2a97a9', title: 'PATENT_TITLE_7828' },
        { id: 'ca623535-95c3-46d2-b6f0-5252d1c89ec6', title: 'PATENT_TITLE_4970' },
        { id: '3469ed51-eaea-42c2-8e5b-5ad9f97a159b', title: 'PATENT_TITLE_8470' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App