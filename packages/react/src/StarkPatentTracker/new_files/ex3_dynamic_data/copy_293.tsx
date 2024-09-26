import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ece64f1b-fa35-4f9a-97e9-4b28ebbeac22', title: 'PATENT_TITLE_6302' },
        { id: '6a04e931-6253-4906-a319-6a08dd464a98', title: 'PATENT_TITLE_3917' },
        { id: '9e9b9a9e-5e89-4b43-896e-70f326cba098', title: 'PATENT_TITLE_7446' },
        { id: '470df0fd-b376-463d-8feb-84c00c912a09', title: 'PATENT_TITLE_4504' },
        { id: '9e142312-8504-4c10-9113-b5d59649a494', title: 'PATENT_TITLE_4960' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App