import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a3661c03-7924-40e4-b50f-585a1683d7aa', title: 'PATENT_TITLE_8334' },
        { id: '0ec616a8-87b0-43fa-b106-91ab04059524', title: 'PATENT_TITLE_2179' },
        { id: '91e9e43d-cfe9-4abb-b443-84199609e9f2', title: 'PATENT_TITLE_8558' },
        { id: 'c1fa8970-3aee-4846-ac48-a1052d7f5dbf', title: 'PATENT_TITLE_2530' },
        { id: '7a2d8039-422a-412d-a885-0c387d82c802', title: 'PATENT_TITLE_7577' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App