import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '45998bde-9b7b-41e4-855e-188a538e33a7', title: 'PATENT_TITLE_4182' },
        { id: 'b3be5e8e-8ed8-4cd4-a645-0a4e11305c3e', title: 'PATENT_TITLE_2795' },
        { id: 'cd6ad7d6-c252-4bd9-8734-fca2096fabe1', title: 'PATENT_TITLE_2340' },
        { id: 'fc0918f4-9f5e-414f-9f7d-06d2481bec02', title: 'PATENT_TITLE_1147' },
        { id: '10a3b111-16c2-4542-a507-96fce8b52d92', title: 'PATENT_TITLE_7486' },
        { id: '4f870890-f2e3-4c5d-be5e-b8cbd8f779ba', title: 'PATENT_TITLE_7230' },
        { id: 'b0379792-ea3a-47da-8c48-3b34768ac053', title: 'PATENT_TITLE_2293' },
        { id: '3c6b602a-a921-47c8-af58-fc2a81b69eaa', title: 'PATENT_TITLE_2405' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App