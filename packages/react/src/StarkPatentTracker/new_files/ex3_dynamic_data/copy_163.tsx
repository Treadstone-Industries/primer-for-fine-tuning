import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'c52f3e6f-243d-409d-8177-feba7ebbe229', title: 'PATENT_TITLE_6190' },
        { id: 'dbd60196-c3c4-41b4-a041-39ff70194efc', title: 'PATENT_TITLE_8992' },
        { id: '6dc661a3-194a-4f2d-9362-689f7aa7d4d9', title: 'PATENT_TITLE_5860' },
        { id: '0c9f5d56-b761-476d-90e7-1fa32f61f755', title: 'PATENT_TITLE_6413' },
        { id: 'aa8c63bd-c535-4c06-b207-e5cdd004110b', title: 'PATENT_TITLE_3118' },
        { id: '30c953ac-e212-4f26-b176-dd3033e95ad3', title: 'PATENT_TITLE_5843' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App