import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '377f6758-a746-412e-86d5-b0b5429809f1', title: 'PATENT_TITLE_5995' },
        { id: 'd0b5035a-43aa-45d4-9bdf-1378f018c6af', title: 'PATENT_TITLE_8431' },
        { id: 'e1e494bf-e5ca-4838-9cfa-8e88829ad26d', title: 'PATENT_TITLE_2994' },
        { id: '1c6695b6-2ee1-4fd9-81ef-4efd9225f7f0', title: 'PATENT_TITLE_4753' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App