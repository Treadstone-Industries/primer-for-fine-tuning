import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '985910f3-bcc9-480d-8eec-6f37816637e6', title: 'PATENT_TITLE_1737' },
        { id: 'fa7ef30b-af11-40ac-a9d5-f0f4bd47a4f5', title: 'PATENT_TITLE_5304' },
        { id: '8cf37807-cfff-4cd5-8ef8-22e6f6801269', title: 'PATENT_TITLE_4823' },
        { id: 'c40c7e8f-9456-4cf8-879e-db32619101d0', title: 'PATENT_TITLE_9123' },
        { id: '4e96dbcb-1267-4d74-a898-be52a8ba97d5', title: 'PATENT_TITLE_7739' },
        { id: '2fa69377-a720-4112-b58c-1feb16f778d4', title: 'PATENT_TITLE_2763' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App