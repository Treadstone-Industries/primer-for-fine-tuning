import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'f01818f1-755c-4fa6-9d9b-a6010b203ba7', title: 'PATENT_TITLE_8490' },
        { id: 'a2b58589-aa45-447e-ba40-c6d6e51c5ecd', title: 'PATENT_TITLE_5073' },
        { id: '5e27c32a-93e6-432f-a375-6a2152249b48', title: 'PATENT_TITLE_1403' },
        { id: '31c4e281-41d9-49c5-beb8-324ca3f1ce24', title: 'PATENT_TITLE_1550' },
        { id: 'bdec2813-b592-4694-99f6-ca22ec446e94', title: 'PATENT_TITLE_9308' },
        { id: '195ab955-0405-4219-9939-feaf41aae020', title: 'PATENT_TITLE_3551' },
        { id: '2bb2ab0d-6b62-4ab2-abf6-bbbc2c423451', title: 'PATENT_TITLE_1214' },
        { id: 'b18d8776-2b21-441f-a9c8-1ed273a323c3', title: 'PATENT_TITLE_5153' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App