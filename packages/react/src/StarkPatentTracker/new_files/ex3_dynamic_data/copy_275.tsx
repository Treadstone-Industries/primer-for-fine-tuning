import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '262ac8ab-b800-4d7b-9a93-894f06a1301d', title: 'PATENT_TITLE_4196' },
        { id: 'c833220c-c7fb-4fb2-ae90-114cd5fb02a7', title: 'PATENT_TITLE_1690' },
        { id: 'cbed8315-7b49-4388-90f4-1dd59576e041', title: 'PATENT_TITLE_4996' },
        { id: '1e0cafb5-7905-46c2-ad76-8f907e54d866', title: 'PATENT_TITLE_1885' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App