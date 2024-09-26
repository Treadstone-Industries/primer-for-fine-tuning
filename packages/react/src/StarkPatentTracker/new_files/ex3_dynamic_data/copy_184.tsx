import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '12105fdc-f579-4d8b-a2e2-6428648f379f', title: 'PATENT_TITLE_2421' },
        { id: '12594bcd-14b3-4ab0-9d3e-bcb0497807b0', title: 'PATENT_TITLE_1063' },
        { id: '7abc3a58-2990-4f50-80c0-0bdad309e0a4', title: 'PATENT_TITLE_1296' },
        { id: 'e1c64d9d-9047-4d4e-9488-98faebb9c16d', title: 'PATENT_TITLE_5381' },
        { id: '88107d70-8a0e-4e83-a7a6-9f767ced369a', title: 'PATENT_TITLE_6840' },
        { id: '5db4e693-3b9d-47d5-8dd2-7e532d7d1726', title: 'PATENT_TITLE_1819' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App