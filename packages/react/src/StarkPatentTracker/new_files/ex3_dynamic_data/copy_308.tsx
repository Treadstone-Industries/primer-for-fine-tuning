import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'f2d99d6a-36ec-4c1d-a406-b98be57fd4cc', title: 'PATENT_TITLE_7267' },
        { id: 'e869d4ad-f20c-4c1f-8285-a00b50e48f47', title: 'PATENT_TITLE_9825' },
        { id: '1f39e7d9-1f78-42bc-9f89-ca598877a9e5', title: 'PATENT_TITLE_7168' },
        { id: '802b9526-d3e6-4e6e-82f2-f2a915bc05c6', title: 'PATENT_TITLE_2727' },
        { id: 'feea785c-7eb1-457c-be1c-f57bcc2652a0', title: 'PATENT_TITLE_4331' },
        { id: 'fa7c2724-ca70-4000-ae55-c6ff74206268', title: 'PATENT_TITLE_2739' },
        { id: 'aff2218b-48ca-420f-9322-5794e43ec523', title: 'PATENT_TITLE_4827' },
        { id: '8fb29a68-9c24-472d-a175-31b60fa4a2f5', title: 'PATENT_TITLE_2560' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App