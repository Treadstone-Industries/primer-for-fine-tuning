import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '334a7171-5646-4568-9bb3-ed6d8bcfb434', title: 'PATENT_TITLE_5219' },
        { id: '9996f58a-9d01-4937-8f14-c1e8ee87394d', title: 'PATENT_TITLE_2274' },
        { id: 'ef193b1c-3d4d-4ca3-b74b-c9470d4570be', title: 'PATENT_TITLE_5826' },
        { id: '9543ca90-de3f-40d6-9972-1c998f6f4c6a', title: 'PATENT_TITLE_8351' },
        { id: 'e73b4161-6539-40b2-88ed-af3d66656b74', title: 'PATENT_TITLE_1332' },
        { id: 'fc1296a8-b8ab-40f0-9551-af600466574c', title: 'PATENT_TITLE_5801' },
        { id: '97491457-27b0-47e7-bae0-db595f58a20f', title: 'PATENT_TITLE_8120' },
        { id: 'c1c5088c-207e-4c56-95b7-6c8e77e9f211', title: 'PATENT_TITLE_2467' },
        { id: '340eae6c-941b-4fa6-9e07-23a64d359969', title: 'PATENT_TITLE_3509' },
        { id: '3dd97a6b-a56b-4526-9e49-be3b36473c67', title: 'PATENT_TITLE_9446' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App