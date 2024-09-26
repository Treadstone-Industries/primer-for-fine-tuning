import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a3343805-b601-4e23-bda9-9bc25245fe96', title: 'PATENT_TITLE_3884' },
        { id: 'e2548614-c176-4d8a-a8ca-0e7d75f3cb22', title: 'PATENT_TITLE_6558' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App