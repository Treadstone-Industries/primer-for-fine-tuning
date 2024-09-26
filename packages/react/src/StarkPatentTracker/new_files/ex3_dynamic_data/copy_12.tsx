import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '48bc8bf8-7202-4ffc-9710-9e8e61fb8048', title: 'PATENT_TITLE_4496' },
        { id: 'b3903711-7ca7-4e08-95d5-15745110ad56', title: 'PATENT_TITLE_9067' },
        { id: '94a51264-c910-410b-8dd2-99bcd4440fb8', title: 'PATENT_TITLE_7972' },
        { id: 'e7474a63-9df5-461f-b280-e3b5964a54cb', title: 'PATENT_TITLE_6302' },
        { id: 'd839d942-cd1f-4393-b075-aa9b99bffec4', title: 'PATENT_TITLE_2494' },
        { id: '2ce16f2b-459a-442a-abf8-64a100615c76', title: 'PATENT_TITLE_9304' },
        { id: '6591806b-ac4f-4b88-a0d0-1b0b34333be0', title: 'PATENT_TITLE_9516' },
        { id: '3d4d9285-a1e7-4409-8072-02ee3e067f4a', title: 'PATENT_TITLE_9654' },
        { id: '8de88f30-f759-48fc-b49a-da3345e2a806', title: 'PATENT_TITLE_5902' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App