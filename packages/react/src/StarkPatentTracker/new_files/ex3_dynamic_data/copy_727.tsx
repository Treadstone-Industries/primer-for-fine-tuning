import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '620dde5f-1045-46df-a7e8-4e64a3705476', title: 'PATENT_TITLE_5236' },
        { id: 'd9e34d24-b087-4acf-b307-86197f0aadfe', title: 'PATENT_TITLE_3644' },
        { id: 'd6fda148-d542-44c5-a14e-8cbf1eb3dc31', title: 'PATENT_TITLE_2780' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App