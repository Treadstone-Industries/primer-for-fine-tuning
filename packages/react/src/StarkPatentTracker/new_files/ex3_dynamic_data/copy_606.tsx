import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'cde501bf-e7c2-4d2f-81a2-946b305882b5', title: 'PATENT_TITLE_9345' },
        { id: '2d0e59d7-7d30-462e-9ca7-8533eda04df1', title: 'PATENT_TITLE_8154' },
        { id: '0f1d9a9c-d917-47dd-a507-5ece0491ab44', title: 'PATENT_TITLE_9202' },
        { id: 'a507e883-9b32-4307-ac0b-35a651cee0b0', title: 'PATENT_TITLE_1990' },
        { id: '05ff5b32-5a17-462b-bd39-ac3b5c919efe', title: 'PATENT_TITLE_9602' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App