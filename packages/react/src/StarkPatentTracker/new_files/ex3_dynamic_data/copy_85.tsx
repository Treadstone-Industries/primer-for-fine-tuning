import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'c8335bf5-876a-46f4-8014-cea282674a6e', title: 'PATENT_TITLE_8626' },
        { id: '63436c4a-ea60-48c1-8488-6ea5e7201975', title: 'PATENT_TITLE_3944' },
        { id: '35caf35c-72c6-4f95-9123-0e5899edec11', title: 'PATENT_TITLE_2914' },
        { id: 'c6cab2d5-bdb6-483c-a89f-331b6297580c', title: 'PATENT_TITLE_9030' },
        { id: '56f210f2-1c23-409a-8052-57e7ac353961', title: 'PATENT_TITLE_3902' },
        { id: 'cfd75afe-fd3f-4dc8-b1be-43439d51b8e6', title: 'PATENT_TITLE_9474' },
        { id: '45c4948e-6875-4a25-b047-f61c55b18c17', title: 'PATENT_TITLE_8355' },
        { id: '10eca100-da43-493e-979a-30218229aff8', title: 'PATENT_TITLE_7158' },
        { id: '033a3183-aec1-45c4-b7cb-533f34456168', title: 'PATENT_TITLE_9665' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App