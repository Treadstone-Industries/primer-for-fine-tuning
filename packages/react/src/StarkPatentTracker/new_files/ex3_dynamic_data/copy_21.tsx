import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '48c09579-149d-4ef4-b82d-1c9bb802a7d5', title: 'PATENT_TITLE_2863' },
        { id: 'c6da6db8-c048-455b-9fd2-e37f7adaa864', title: 'PATENT_TITLE_8563' },
        { id: '8082fe1c-5a4b-4d2a-85f9-834fa6736063', title: 'PATENT_TITLE_7855' },
        { id: '07033c63-c787-42d1-8586-4002497f62d8', title: 'PATENT_TITLE_9366' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App