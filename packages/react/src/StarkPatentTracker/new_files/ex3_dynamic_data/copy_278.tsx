import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b321b86d-dc31-43ec-9dc7-402e1545891b', title: 'PATENT_TITLE_2610' },
        { id: '655e9358-c746-47fe-bfec-9686c17dd912', title: 'PATENT_TITLE_7019' },
        { id: 'cdc7380d-82eb-4e5c-b307-ce8a71d2fa96', title: 'PATENT_TITLE_7384' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App