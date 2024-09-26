import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '1da39b62-d602-43e3-acb8-d964f8a958ab', title: 'PATENT_TITLE_9535' },
        { id: 'e725108a-7a71-4ea0-b5cd-d3dd4d9d17b2', title: 'PATENT_TITLE_6692' },
        { id: '3aaa5952-130d-4d45-878c-90dce348725f', title: 'PATENT_TITLE_4944' },
        { id: '96708cf6-cd73-49c9-9ac3-151f698d253e', title: 'PATENT_TITLE_1216' },
        { id: 'e18ec776-9d78-4b06-9248-a387aabbc4be', title: 'PATENT_TITLE_8475' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App