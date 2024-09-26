import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '1959e5bd-59fd-4942-b5a7-b1f5b8f768ec', title: 'PATENT_TITLE_5194' },
        { id: 'a823dbcc-da58-40dd-8f44-5bd2e003a595', title: 'PATENT_TITLE_3985' },
        { id: '840a1375-f496-4755-977e-7974a227fff3', title: 'PATENT_TITLE_9904' },
        { id: '8d131480-d72f-4835-b517-ceb3ecfa450b', title: 'PATENT_TITLE_4284' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App