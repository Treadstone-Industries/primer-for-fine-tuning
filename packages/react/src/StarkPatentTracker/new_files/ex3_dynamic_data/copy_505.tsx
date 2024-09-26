import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '993a2e0c-753c-4ffd-9bc5-29ac48460bcc', title: 'PATENT_TITLE_4440' },
        { id: '557bfbc0-9364-4cf1-98ab-36f0d168655c', title: 'PATENT_TITLE_9654' },
        { id: '80739d51-e9ee-4755-8db6-1c1d38d2b9a3', title: 'PATENT_TITLE_7089' },
        { id: 'b009ce1c-1b70-487a-b075-469b0cd188f6', title: 'PATENT_TITLE_3374' },
        { id: '1f08be08-2afa-4555-b70f-66146e70accd', title: 'PATENT_TITLE_4571' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App