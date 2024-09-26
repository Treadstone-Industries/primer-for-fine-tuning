import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '21276d64-386a-4f28-b106-0674b8c09731', title: 'PATENT_TITLE_2864' },
        { id: '4a159c9e-9c2c-43d8-813d-f5dcbc033d86', title: 'PATENT_TITLE_6455' },
        { id: 'd815584f-45cd-4f69-927a-e43674770e05', title: 'PATENT_TITLE_2460' },
        { id: '39cd7a77-cbf6-4e0a-86a3-9a536ca0b1c9', title: 'PATENT_TITLE_8990' },
        { id: '22a68133-820c-43c7-a522-332c3ca22a9c', title: 'PATENT_TITLE_5500' },
        { id: '8903035f-b608-403a-b509-efd7b16b78d1', title: 'PATENT_TITLE_5877' },
        { id: 'e4836fce-d7de-4801-8dcd-34335bb97b57', title: 'PATENT_TITLE_6601' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App