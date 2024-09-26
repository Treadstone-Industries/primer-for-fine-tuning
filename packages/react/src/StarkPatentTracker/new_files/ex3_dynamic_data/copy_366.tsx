import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '13c07934-2672-4f37-ae36-3ed243a62caa', title: 'PATENT_TITLE_9217' },
        { id: 'e0770cbd-edf3-4e30-9ffe-57676c7871f5', title: 'PATENT_TITLE_6914' },
        { id: '74d6fb85-5c5c-48d0-a09b-9e9f0cd2584c', title: 'PATENT_TITLE_9035' },
        { id: 'e8a0e236-a4df-452c-a8da-2f031366004f', title: 'PATENT_TITLE_9178' },
        { id: '90d40afe-793d-4604-a881-111ed0787cc6', title: 'PATENT_TITLE_5129' },
        { id: 'c147c299-61d1-405a-b891-e69f974378ae', title: 'PATENT_TITLE_3635' },
        { id: 'eb8abd44-ce73-4db5-9c91-20a0287ed293', title: 'PATENT_TITLE_2326' },
        { id: '073c900a-ab6c-40bd-b2a9-8df341177346', title: 'PATENT_TITLE_2255' },
        { id: '083e1c98-20a1-42bf-ba37-f4357769874f', title: 'PATENT_TITLE_7374' },
        { id: '158a801b-3317-4a1d-b9b5-63bf5254f143', title: 'PATENT_TITLE_8467' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App