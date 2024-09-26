import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'fcdd049f-d3c9-40f5-81e7-5b0013e279ae', title: 'PATENT_TITLE_7361' },
        { id: '9475ed79-557b-410e-9c58-9e5196ef2b7a', title: 'PATENT_TITLE_2689' },
        { id: '3a483094-b1d3-4485-a1e4-92bb5d2949ae', title: 'PATENT_TITLE_9949' },
        { id: 'a191f359-d357-4ea4-b70c-536d63af7431', title: 'PATENT_TITLE_9619' },
        { id: '874632e9-b199-4d63-8d4f-5b4dc6631842', title: 'PATENT_TITLE_4352' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App