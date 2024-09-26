import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0e3562ff-060e-45eb-9543-ccb67c6b8f57', title: 'PATENT_TITLE_9651' },
        { id: '3ad07b8c-80dd-4ae8-a003-bdb5522ecfac', title: 'PATENT_TITLE_6979' },
        { id: '400f4d03-bf70-4644-920f-ddbe0781027c', title: 'PATENT_TITLE_6786' },
        { id: '5d833e42-5daa-4d98-9e1b-a2d02137ca84', title: 'PATENT_TITLE_8397' },
        { id: 'b305cf96-584e-41b1-b788-0608ca6ac49b', title: 'PATENT_TITLE_3407' },
        { id: '2a8dbe1d-eb05-4485-95f8-36f7164bdfa0', title: 'PATENT_TITLE_9485' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App