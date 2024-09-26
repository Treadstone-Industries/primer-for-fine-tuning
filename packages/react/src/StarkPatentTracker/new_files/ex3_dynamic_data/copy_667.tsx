import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '3bc7dcae-eb46-4b35-91a5-74d0cd4cea6a', title: 'PATENT_TITLE_4273' },
        { id: '8874f03e-0477-4ecd-8970-6c6eecfaef7c', title: 'PATENT_TITLE_8990' },
        { id: '39e6e8a0-7585-432a-a44a-432dfced48a5', title: 'PATENT_TITLE_8779' },
        { id: 'f12881a3-9442-486f-ab95-3d9d9af8dfda', title: 'PATENT_TITLE_8908' },
        { id: '1fc767f2-c960-435f-8da2-10a9e693a6cf', title: 'PATENT_TITLE_1558' },
        { id: '3f91a4ad-dcec-4883-af8d-93e8a84f5cc3', title: 'PATENT_TITLE_1758' },
        { id: 'dea725ed-33c8-4f56-b95a-6572ad9dfd08', title: 'PATENT_TITLE_6093' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App