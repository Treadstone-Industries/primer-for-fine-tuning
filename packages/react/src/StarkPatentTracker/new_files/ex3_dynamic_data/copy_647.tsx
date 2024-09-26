import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '1ef3bbe2-d04d-4385-90ff-d759d5665a29', title: 'PATENT_TITLE_8869' },
        { id: '44507187-fd4e-4b75-82e9-6d30f5479f93', title: 'PATENT_TITLE_8365' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App