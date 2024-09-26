import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '812b2f9a-14db-48fd-8a23-381b13a9b324', title: 'PATENT_TITLE_5302' },
        { id: '2d7b87e9-3649-4025-a4a3-2502c9138ba6', title: 'PATENT_TITLE_7379' },
        { id: 'c2aaa118-ce89-486d-95c0-7b5cbcb1d9d0', title: 'PATENT_TITLE_7749' },
        { id: 'a1593ee0-9a5f-44ea-bcf7-fe9a3c57ee39', title: 'PATENT_TITLE_6117' },
        { id: 'f630ab60-c93d-419b-9dc2-09132a346c69', title: 'PATENT_TITLE_9249' },
        { id: '6166be71-047e-4220-b064-29d7aed99d43', title: 'PATENT_TITLE_6927' },
        { id: '4f0e615a-b63d-42d7-bc2e-503e4fa2709d', title: 'PATENT_TITLE_6796' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App