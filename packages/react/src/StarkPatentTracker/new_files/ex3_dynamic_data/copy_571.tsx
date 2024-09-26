import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '5ea36f87-3258-468a-8939-bbbf0f1e44c9', title: 'PATENT_TITLE_8933' },
        { id: 'c88a7ca7-910e-4332-9c75-bab3e191a027', title: 'PATENT_TITLE_6262' },
        { id: 'a567fbfd-1454-4f85-8985-bb78bc012dc8', title: 'PATENT_TITLE_1467' },
        { id: '0294ef09-e30f-4c8b-9872-64e353d7e5ef', title: 'PATENT_TITLE_7717' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App