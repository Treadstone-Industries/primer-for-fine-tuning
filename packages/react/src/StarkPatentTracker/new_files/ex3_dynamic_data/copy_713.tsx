import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '3af599cd-1f07-47bc-8a25-8a38b06dcc87', title: 'PATENT_TITLE_2787' },
        { id: 'bfad3605-a188-44c1-bc89-3be70f3a516d', title: 'PATENT_TITLE_9331' },
        { id: 'ff6a8894-a214-482f-beed-0e9925620e71', title: 'PATENT_TITLE_3268' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App