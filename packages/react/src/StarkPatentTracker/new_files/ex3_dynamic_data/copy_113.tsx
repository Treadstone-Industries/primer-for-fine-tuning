import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ca8dc3e9-21bd-4b41-9980-4f5ad8281cc4', title: 'PATENT_TITLE_1523' },
        { id: '1f248e0c-db5d-4cdc-a48d-c53d7eb737d5', title: 'PATENT_TITLE_8914' },
        { id: 'a67baa7b-bfa7-420e-b1f9-3bc9283f70f8', title: 'PATENT_TITLE_6067' },
        { id: '6675c560-c426-47a4-b90d-4c8673bfdf38', title: 'PATENT_TITLE_5585' },
        { id: 'fdd8af29-a34c-4a42-9c8e-0bbda35ea99f', title: 'PATENT_TITLE_9092' },
        { id: '07a53182-dad9-44c3-9188-ce09a1b5375c', title: 'PATENT_TITLE_1132' },
        { id: 'd5a61bb7-114e-4234-8bc2-92d614c459b0', title: 'PATENT_TITLE_3621' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App