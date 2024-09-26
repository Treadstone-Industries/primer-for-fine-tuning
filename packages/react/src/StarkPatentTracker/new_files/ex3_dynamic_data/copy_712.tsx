import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'e1457240-de46-487c-b805-7c9559995664', title: 'PATENT_TITLE_9870' },
        { id: 'e28cde0e-d680-4168-bd01-78162ba94e65', title: 'PATENT_TITLE_4313' },
        { id: 'ee55cd53-d071-4bd7-9a3c-2efcf6b58ded', title: 'PATENT_TITLE_3803' },
        { id: '737180de-8ac0-491c-804a-bc018deda891', title: 'PATENT_TITLE_8118' },
        { id: '0f30ea8f-15dc-47dc-9391-37f023468e6b', title: 'PATENT_TITLE_4942' },
        { id: '83841eea-146b-4111-9845-cc056503e23f', title: 'PATENT_TITLE_4598' },
        { id: '485bc87a-45c6-43f3-8744-4e3b78bab529', title: 'PATENT_TITLE_2088' },
        { id: 'a6038ad7-c456-4e71-b130-bbf6fc6942d0', title: 'PATENT_TITLE_5743' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App