import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '9c035639-a80a-4496-950f-f9d31692f388', title: 'PATENT_TITLE_1890' },
        { id: '025ed852-012e-4cac-91ed-76ab738e0644', title: 'PATENT_TITLE_6971' },
        { id: '102fee1e-3327-4806-ab11-4160b4e1671d', title: 'PATENT_TITLE_2908' },
        { id: '5105a726-7497-462f-a188-0fc334a7dd1c', title: 'PATENT_TITLE_6133' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App