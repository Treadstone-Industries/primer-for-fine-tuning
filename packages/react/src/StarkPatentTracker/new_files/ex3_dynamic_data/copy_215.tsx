import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '29a19543-dad9-4337-abca-d2db650629a9', title: 'PATENT_TITLE_7004' },
        { id: 'e576b514-9103-4b4f-996f-c4a26d12b6b1', title: 'PATENT_TITLE_2427' },
        { id: '25644237-031a-4736-8f2f-9223d97a55ad', title: 'PATENT_TITLE_8916' },
        { id: 'c08d60b2-cbb8-447a-be6e-3a5f09e45650', title: 'PATENT_TITLE_1688' },
        { id: '55564ad1-e32c-4d51-8ada-1ceed8e87f4f', title: 'PATENT_TITLE_5243' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App