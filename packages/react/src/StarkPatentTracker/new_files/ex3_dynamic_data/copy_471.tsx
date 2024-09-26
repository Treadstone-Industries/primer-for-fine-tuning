import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '77922d93-4411-423c-a319-21aff6a929a5', title: 'PATENT_TITLE_2079' },
        { id: '0e8c18a0-998e-4cba-b63d-0b5c5348271a', title: 'PATENT_TITLE_8482' },
        { id: '3ea04f0a-3fa0-4115-a98a-dc7c1efb80bc', title: 'PATENT_TITLE_6896' },
        { id: 'b829e9f6-b5c4-4dc8-b6f6-61273f6199a6', title: 'PATENT_TITLE_8776' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App