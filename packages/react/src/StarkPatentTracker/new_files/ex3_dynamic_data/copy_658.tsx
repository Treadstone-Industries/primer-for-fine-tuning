import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '674cae18-fce5-47a3-9743-d889125e47f8', title: 'PATENT_TITLE_7680' },
        { id: '4b8895d7-327d-4f7c-923e-6a4c0848d476', title: 'PATENT_TITLE_3146' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App