import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0fc7d096-a4d6-4d17-86fd-d6328e69cdd3', title: 'PATENT_TITLE_9751' },
        { id: 'ef0629ce-3fb2-4957-b8cb-703e9c1c2710', title: 'PATENT_TITLE_9464' },
        { id: 'abe3f7f0-1368-413b-b36c-69adb46e45d8', title: 'PATENT_TITLE_2098' },
        { id: 'e5f62052-9b64-4f1b-9224-2ffe822e0e6c', title: 'PATENT_TITLE_9653' },
        { id: 'bde3e80e-f0a8-4614-82c3-a9e13a27c493', title: 'PATENT_TITLE_6812' },
        { id: '875e278b-b833-4020-91b8-b998f89503a9', title: 'PATENT_TITLE_9187' },
        { id: '8aed3950-8797-4616-afc0-32e10b1bda88', title: 'PATENT_TITLE_1265' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App