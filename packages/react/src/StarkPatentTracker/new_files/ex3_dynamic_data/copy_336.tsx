import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '17b1d535-0ef0-40a4-8861-9d580aab3cde', title: 'PATENT_TITLE_1524' },
        { id: '5f26e42e-372e-404d-8bd9-8988beff8c2a', title: 'PATENT_TITLE_4882' },
        { id: '81e93609-5b3e-4abf-870f-6d5c56fc299c', title: 'PATENT_TITLE_8105' },
        { id: '32634250-e4b3-4921-9503-055b720bec63', title: 'PATENT_TITLE_6894' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App