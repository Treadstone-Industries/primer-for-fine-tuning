import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '869282a7-250d-4611-9704-f419aa4bd134', title: 'PATENT_TITLE_2446' },
        { id: 'd762ebad-03c9-4376-8380-fb0a54f541ad', title: 'PATENT_TITLE_9127' },
        { id: 'a6043d9d-ed32-4841-8db8-b08238b2554d', title: 'PATENT_TITLE_1142' },
        { id: 'a9562b41-761e-43f0-9ecd-46cd372774de', title: 'PATENT_TITLE_4840' },
        { id: '7f087d10-8c48-47ce-adef-d3cf241ace22', title: 'PATENT_TITLE_6732' },
        { id: '5be2e53b-5773-4d70-8cf5-7bb22e3800ce', title: 'PATENT_TITLE_5975' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App