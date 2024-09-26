import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '9076edad-803f-4e9e-aac8-06dcf9c632f3', title: 'PATENT_TITLE_3051' },
        { id: 'e6dd598d-131b-4d41-b8c0-8f3f555b85be', title: 'PATENT_TITLE_5988' },
        { id: '35af46cd-f397-46c3-a8e0-9ec89a008e5f', title: 'PATENT_TITLE_2070' },
        { id: '8bbd90e6-f735-42cb-8739-13a347486ade', title: 'PATENT_TITLE_8759' },
        { id: '7495f516-7b24-4eb3-a62b-ae674896e694', title: 'PATENT_TITLE_7988' },
        { id: 'ebc278e9-19b6-41d8-956c-bbea799af115', title: 'PATENT_TITLE_4413' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App