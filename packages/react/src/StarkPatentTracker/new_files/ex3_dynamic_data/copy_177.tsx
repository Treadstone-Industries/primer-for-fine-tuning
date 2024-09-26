import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a141fba2-fa59-47b9-b9c7-7374a070f6a9', title: 'PATENT_TITLE_8979' },
        { id: '203a4b27-6111-4140-a67d-137fe8e5cba5', title: 'PATENT_TITLE_6627' },
        { id: 'a9c69d12-6f20-477e-ad45-79aff2194659', title: 'PATENT_TITLE_7798' },
        { id: 'a4a0e960-0dcf-495c-9205-d72283d9d17d', title: 'PATENT_TITLE_2997' },
        { id: '9fbdfddb-e61d-4d3d-aa4d-3687be6d45fb', title: 'PATENT_TITLE_8944' },
        { id: 'bb0615ae-2e85-4c57-8f36-bfac419a1df2', title: 'PATENT_TITLE_8277' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App