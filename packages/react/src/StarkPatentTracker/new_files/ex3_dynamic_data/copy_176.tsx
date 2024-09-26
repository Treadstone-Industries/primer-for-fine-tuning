import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'f2bb1ecf-2f1c-419e-ad81-e9311ab14456', title: 'PATENT_TITLE_7766' },
        { id: '42fe5806-b4f0-42d6-beb2-6e9aefb887d6', title: 'PATENT_TITLE_7505' },
        { id: '51ceeb1c-6e43-4907-a8ef-fc7700647fcd', title: 'PATENT_TITLE_8654' },
        { id: '09db5c5d-9053-455f-a527-0f2bbe9b8044', title: 'PATENT_TITLE_1130' },
        { id: '3934d329-09bf-48f9-8ad9-a7a089a07d0d', title: 'PATENT_TITLE_5490' },
        { id: 'f0e70c06-23c8-4492-949d-5cac1744700a', title: 'PATENT_TITLE_1603' },
        { id: 'efb89873-fdd1-4afd-a9da-1cd9702bcecf', title: 'PATENT_TITLE_9461' },
        { id: '92349980-e429-41ae-87a6-804338c70db2', title: 'PATENT_TITLE_4046' },
        { id: '8ec71bb3-5cc8-4520-8b71-ad0c47f69a1c', title: 'PATENT_TITLE_8096' },
        { id: '28bfbcfc-8a14-4d0a-b204-aac354c56c1b', title: 'PATENT_TITLE_6470' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App