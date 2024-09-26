import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '7ab7c664-de49-400b-a753-f6b17f143982', title: 'PATENT_TITLE_1407' },
        { id: '0b28d1be-f8c8-4f48-95f6-eee47843e23e', title: 'PATENT_TITLE_8399' },
        { id: '775f278a-4f75-4486-9d71-be8f981e85ff', title: 'PATENT_TITLE_5964' },
        { id: 'e634b2d0-411d-4a79-8a5f-887e9380300e', title: 'PATENT_TITLE_6673' },
        { id: '0f4b5dcb-061e-4120-b23f-5f848d7b2642', title: 'PATENT_TITLE_1511' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App