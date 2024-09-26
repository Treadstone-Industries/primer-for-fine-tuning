import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'df7bc25e-7379-41b3-834e-753ed718fda2', title: 'PATENT_TITLE_9876' },
        { id: '2f58ca33-ffca-4e68-aef8-3e002cb26ece', title: 'PATENT_TITLE_2074' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App