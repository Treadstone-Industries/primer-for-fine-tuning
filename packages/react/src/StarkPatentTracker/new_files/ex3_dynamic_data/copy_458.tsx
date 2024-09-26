import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '74c93bbd-cc28-4d25-a1ad-c7de6a8070bd', title: 'PATENT_TITLE_1366' },
        { id: '8cb3b600-c580-4b41-8f64-9498114c3b1c', title: 'PATENT_TITLE_3239' },
        { id: '2a0de2d0-fe49-42d1-a60e-230ab45a6b10', title: 'PATENT_TITLE_7863' },
        { id: '61633bd4-a7c4-4a32-8d98-b8f9276f98cb', title: 'PATENT_TITLE_4123' },
        { id: '971a4efd-95e8-462b-a8a6-c8ee3d691c76', title: 'PATENT_TITLE_3895' },
        { id: '9c2e3fef-2f29-4975-9cfa-3c82d182aecd', title: 'PATENT_TITLE_3865' },
        { id: '9e94ff05-dd60-44a5-8fa4-8f11ea8eb925', title: 'PATENT_TITLE_1895' },
        { id: 'b04441f6-be9d-4e86-8f1d-e5d123ae091b', title: 'PATENT_TITLE_7072' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App