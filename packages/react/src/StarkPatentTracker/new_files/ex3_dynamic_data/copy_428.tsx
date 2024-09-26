import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a8541bd3-48be-4c42-a78a-9156a627fb81', title: 'PATENT_TITLE_8429' },
        { id: 'bf6fb6ea-e8e4-487e-9d09-8be00e280f7e', title: 'PATENT_TITLE_8923' },
        { id: '96bc401c-9754-4dce-8a71-bee8b85e0f0c', title: 'PATENT_TITLE_9402' },
        { id: 'd67a04e6-98ce-4f7d-8122-92168956a1e5', title: 'PATENT_TITLE_7691' },
        { id: 'ee96eabb-0841-4dcc-9e97-20b5261bd865', title: 'PATENT_TITLE_5040' },
        { id: '4a6a4210-2a5e-4d3a-8ff2-71d645dc7342', title: 'PATENT_TITLE_3067' },
        { id: '5908c0dc-0683-4b3e-af9e-4f0682000a1c', title: 'PATENT_TITLE_6855' },
        { id: '35f1fff7-b626-4f8f-825b-24a473943b00', title: 'PATENT_TITLE_8178' },
        { id: '623ece29-342b-4209-aa06-5d80bb5be9b3', title: 'PATENT_TITLE_7106' },
        { id: '88b7d3ae-8f14-427c-902a-020e45489f1c', title: 'PATENT_TITLE_1235' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App