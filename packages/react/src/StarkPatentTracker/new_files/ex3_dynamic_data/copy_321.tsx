import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '4990e1fc-4b09-4820-8328-ecb7faed6837', title: 'PATENT_TITLE_9804' },
        { id: '2f05b597-e914-48bd-a7ba-90960ed5853f', title: 'PATENT_TITLE_8294' },
        { id: '51865fa3-6464-412c-a56c-e1436c059835', title: 'PATENT_TITLE_6633' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App