import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b6eb76a1-c490-4da7-b790-a3c3c951651b', title: 'PATENT_TITLE_2998' },
        { id: '3deb9f7d-8230-4d91-a8a3-389581bf23a1', title: 'PATENT_TITLE_9023' },
        { id: 'a38e34af-8c64-4f2c-a69b-e09e76e3fbe9', title: 'PATENT_TITLE_7095' },
        { id: '31b8ab5f-5b24-4500-9168-a7d4bab0ba2a', title: 'PATENT_TITLE_3224' },
        { id: '7c78cd30-7666-42a0-be6c-33f94983e9bb', title: 'PATENT_TITLE_1725' },
        { id: '8fee597b-71e4-44b7-9c03-a0584217879b', title: 'PATENT_TITLE_8582' },
        { id: 'd8964a89-c660-41a9-b1d8-be4b24adeae0', title: 'PATENT_TITLE_4652' },
        { id: 'ac8d8def-59c3-48a0-a650-80c88bb9f424', title: 'PATENT_TITLE_6428' },
        { id: '8f91ee15-72bf-4ecb-9680-e064d4b078db', title: 'PATENT_TITLE_9254' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App