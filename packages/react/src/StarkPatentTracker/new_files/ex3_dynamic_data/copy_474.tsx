import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '1ae911f9-a634-46d8-af36-09057d1fde20', title: 'PATENT_TITLE_1586' },
        { id: '9436a588-b6ef-44eb-b80b-9a428c160a05', title: 'PATENT_TITLE_7998' },
        { id: '3d67a19a-e440-4c0f-a0a8-69cd1b4668ed', title: 'PATENT_TITLE_3277' },
        { id: '47cd3475-1e4e-433a-9544-17f5a4cbbb60', title: 'PATENT_TITLE_7651' },
        { id: '65a8d5cd-81fe-4f1f-810b-0d1d692b1d19', title: 'PATENT_TITLE_1089' },
        { id: '3a7907e5-152e-49db-b335-95b4233d5225', title: 'PATENT_TITLE_9208' },
        { id: '847ba659-e780-4014-97e1-5c41c85b07da', title: 'PATENT_TITLE_3529' },
        { id: '83d1aef7-08f8-4184-9186-fef6eacfe4b6', title: 'PATENT_TITLE_1036' },
        { id: '7c74c3ef-70cb-47c3-a7b9-788e39621639', title: 'PATENT_TITLE_8164' },
        { id: '17677211-ffe3-45d2-8eb3-10ff66ea0023', title: 'PATENT_TITLE_3661' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App