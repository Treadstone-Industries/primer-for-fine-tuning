import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'e575f10f-ecb3-46d6-af59-dce990e49b27', title: 'PATENT_TITLE_8288' },
        { id: '933bb6d6-aac1-4ecc-9c27-b63cf708c0d5', title: 'PATENT_TITLE_4451' },
        { id: '1db1b65a-6fc8-43d3-8be8-9916336e0089', title: 'PATENT_TITLE_4518' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App