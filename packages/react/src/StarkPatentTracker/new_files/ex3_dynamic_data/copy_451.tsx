import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'e1ad161e-225d-45ce-83f9-1fcf32c8deeb', title: 'PATENT_TITLE_6156' },
        { id: '755215da-5901-451e-9cc7-287b86e63fa3', title: 'PATENT_TITLE_7569' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App