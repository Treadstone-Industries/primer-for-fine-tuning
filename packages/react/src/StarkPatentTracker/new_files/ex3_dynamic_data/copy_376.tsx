import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '88350594-9d4f-424c-9474-1de3c798cbff', title: 'PATENT_TITLE_5155' },
        { id: '0268be17-076e-4f2a-b5a6-36c59e55686f', title: 'PATENT_TITLE_9922' },
        { id: 'edb909ed-b9e2-4e65-9d5a-f08b725dbecc', title: 'PATENT_TITLE_7766' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App