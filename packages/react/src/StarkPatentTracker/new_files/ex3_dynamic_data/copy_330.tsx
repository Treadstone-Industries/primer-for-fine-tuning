import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '01804c1c-dbfa-43dd-906d-65990c7027d7', title: 'PATENT_TITLE_9087' },
        { id: '48aefa14-be65-4559-bd9b-f70ae5f2e7b3', title: 'PATENT_TITLE_6999' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App