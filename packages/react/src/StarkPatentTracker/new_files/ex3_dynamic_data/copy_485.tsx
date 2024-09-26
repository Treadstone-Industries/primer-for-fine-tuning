import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ad479055-182e-4c7c-be59-87275b64e353', title: 'PATENT_TITLE_2029' },
        { id: '50a698fd-5afb-4b77-b976-b43782fd4f39', title: 'PATENT_TITLE_6699' },
        { id: 'e3b4b748-b62f-4bb1-a664-90a9795ed4fe', title: 'PATENT_TITLE_1233' },
        { id: '16d71638-3544-4626-9229-f1acd1a031e6', title: 'PATENT_TITLE_5026' },
        { id: '63bd8485-4a04-4c7d-8c1a-1f2008c252b1', title: 'PATENT_TITLE_3594' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App