import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a73c9f64-d0da-42eb-b6bf-6dd263626d3b', title: 'PATENT_TITLE_2601' },
        { id: '8f9e9afd-4911-4ac4-a22e-9fb6837987ae', title: 'PATENT_TITLE_8238' },
        { id: 'fbdcf67d-c296-4405-b0d2-c824c6c92556', title: 'PATENT_TITLE_2788' },
        { id: 'd19f26a6-e175-446d-afac-227450927685', title: 'PATENT_TITLE_2014' },
        { id: 'f052f98f-4dce-4be7-9471-3288a47d442e', title: 'PATENT_TITLE_7896' },
        { id: 'b8decb9e-a086-4052-9fb1-e98e10e3010e', title: 'PATENT_TITLE_9273' },
        { id: '508d203b-eca1-4b57-8a71-d1c74266395b', title: 'PATENT_TITLE_2228' },
        { id: '11288a04-48b7-4c78-acd6-bce799ab1b32', title: 'PATENT_TITLE_6060' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App