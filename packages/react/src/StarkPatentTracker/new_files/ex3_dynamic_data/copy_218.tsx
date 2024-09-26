import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'd26acaca-a6cc-4b6d-9e9d-c08f2011bb6f', title: 'PATENT_TITLE_3478' },
        { id: '87531fd7-7a1c-4de6-ad53-bc7a301233c9', title: 'PATENT_TITLE_8524' },
        { id: '31a4ce1f-0e97-4e4f-8ed9-84a6038eca9d', title: 'PATENT_TITLE_6456' },
        { id: '5579b6dc-d657-4fd2-a558-d67b9a386b01', title: 'PATENT_TITLE_7833' },
        { id: '6e2cb246-3806-4416-b378-90169190cd38', title: 'PATENT_TITLE_5655' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App