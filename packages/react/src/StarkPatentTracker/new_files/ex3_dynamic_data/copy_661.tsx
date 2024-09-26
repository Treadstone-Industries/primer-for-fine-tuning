import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '013f8a28-1dd3-4307-b5bf-8d6bcd2ff272', title: 'PATENT_TITLE_7253' },
        { id: '2e1d81ac-2366-457b-88e9-5fa67ac43ff2', title: 'PATENT_TITLE_7418' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App