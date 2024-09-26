import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'aea5b805-3031-4350-8e0f-ed8d7f368062', title: 'PATENT_TITLE_7082' },
        { id: '69860fdf-8aa8-4450-b184-c46f299e2a32', title: 'PATENT_TITLE_1897' },
        { id: '79247649-0b8f-494d-8618-a110200603d7', title: 'PATENT_TITLE_7309' },
        { id: '5bde8fd9-a30d-4499-a24a-03361bb9eec9', title: 'PATENT_TITLE_8177' },
        { id: 'a36a8b5f-46cd-42a9-9ea8-06fd5fb2c597', title: 'PATENT_TITLE_6227' },
        { id: 'd73ae743-42c0-4fe1-8f0d-eccdf89c0946', title: 'PATENT_TITLE_2102' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App