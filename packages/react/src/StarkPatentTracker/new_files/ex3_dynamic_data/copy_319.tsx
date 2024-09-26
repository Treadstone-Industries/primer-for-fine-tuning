import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a38706f8-60c1-402b-adce-1da2a4c8e0e1', title: 'PATENT_TITLE_5017' },
        { id: '7794e5a8-fac6-4092-b67a-fe76f38008dc', title: 'PATENT_TITLE_5540' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App