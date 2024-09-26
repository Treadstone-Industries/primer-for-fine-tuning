import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '620efa3f-095f-458a-a25b-4cfc012f3125', title: 'PATENT_TITLE_6834' },
        { id: 'de87481b-9242-4b40-96bd-f7fe70d9fac2', title: 'PATENT_TITLE_1393' },
        { id: '3299ab8f-5a72-48ac-9cd4-c76f9915d2b8', title: 'PATENT_TITLE_2679' },
        { id: '407a996c-13dc-4f3d-9f79-0dea69af8dfd', title: 'PATENT_TITLE_5482' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App