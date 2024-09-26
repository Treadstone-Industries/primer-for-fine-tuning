import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'c7c6da60-d1b4-49ae-95b6-abeab9bc7edb', title: 'PATENT_TITLE_7451' },
        { id: '89bc0c52-5693-4fed-a64d-455c74e3d251', title: 'PATENT_TITLE_8794' },
        { id: '3f65e649-66ad-4cc6-b105-acf8d253e90b', title: 'PATENT_TITLE_8400' },
        { id: '4246b4a7-3457-41c2-93e7-3ee6352ce7f3', title: 'PATENT_TITLE_1504' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App