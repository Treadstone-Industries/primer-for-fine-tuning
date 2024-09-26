import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '141611a0-3077-45bc-8ce5-d35b013ca96a', title: 'PATENT_TITLE_5429' },
        { id: '5fbfe505-611a-45f9-b188-f037b83e409f', title: 'PATENT_TITLE_3005' },
        { id: 'ff4170f2-8837-45f3-b47b-768b624dfcfd', title: 'PATENT_TITLE_1254' },
        { id: '7b37ea51-d021-4f53-80cc-2006914d83b1', title: 'PATENT_TITLE_8280' },
        { id: '60335d4b-3995-4109-90c6-b432f5058aea', title: 'PATENT_TITLE_8217' },
        { id: '855e67ca-13f1-439a-aac5-f4b8d3a7590b', title: 'PATENT_TITLE_4553' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App