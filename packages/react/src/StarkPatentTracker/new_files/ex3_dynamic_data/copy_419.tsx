import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '4cb9da44-1b8c-4c45-bd65-69dbd0c857a7', title: 'PATENT_TITLE_6378' },
        { id: 'c0b8722a-35f4-458e-a317-1dc391f6b348', title: 'PATENT_TITLE_7087' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App