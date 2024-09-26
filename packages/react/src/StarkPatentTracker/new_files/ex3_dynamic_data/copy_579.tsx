import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '7c5dd910-3362-419b-99a3-3f88d57d98ea', title: 'PATENT_TITLE_4403' },
        { id: 'fb89d7f8-1624-4bb9-be41-303d1b89a024', title: 'PATENT_TITLE_9310' },
        { id: '2b3f3d85-bbf0-4c68-b982-7acae6111cf3', title: 'PATENT_TITLE_9977' },
        { id: '84ff31ac-a121-4042-a18c-3deb491efd6a', title: 'PATENT_TITLE_2317' },
        { id: 'eac9d0d4-7e0d-49ae-b879-4820f1a24aa7', title: 'PATENT_TITLE_1730' },
        { id: 'c7aef547-1c65-4acb-8a74-a3b5baedef54', title: 'PATENT_TITLE_6138' },
        { id: '26e5d86f-74b4-427c-8938-06b1b814af26', title: 'PATENT_TITLE_8247' },
        { id: '91df9e2e-cd76-4af6-bb34-a0e290ddb243', title: 'PATENT_TITLE_2950' },
        { id: 'f1adc9ef-b2dc-47ee-ab6e-f960dc13828c', title: 'PATENT_TITLE_4313' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App