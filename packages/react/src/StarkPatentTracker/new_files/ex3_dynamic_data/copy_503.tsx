import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'cead4ca1-2f6b-4aa2-a27c-820e29845499', title: 'PATENT_TITLE_2002' },
        { id: '6ce2b238-bb08-4ce7-aa36-6b2f9fb73ada', title: 'PATENT_TITLE_5405' },
        { id: '5272717b-79e5-4a20-a0f3-d20b0017f290', title: 'PATENT_TITLE_5433' },
        { id: 'b0048297-cd24-4750-8f89-13083f2f74ed', title: 'PATENT_TITLE_4070' },
        { id: '7d0ea14a-82e9-41cc-aa3a-5e3862f9417d', title: 'PATENT_TITLE_1677' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App