import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '28812728-87e9-4239-b3e6-27dbe79f52b9', title: 'PATENT_TITLE_3776' },
        { id: 'a18c64e9-98cb-4272-9315-c92034c94b5a', title: 'PATENT_TITLE_7958' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App