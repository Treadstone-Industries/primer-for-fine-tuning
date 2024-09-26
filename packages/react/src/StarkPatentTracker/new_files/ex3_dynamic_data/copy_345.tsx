import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '70f00ee4-f557-4043-bee4-dd7ed90307fa', title: 'PATENT_TITLE_3049' },
        { id: 'cc114d44-a947-437a-ad28-03aacbed897a', title: 'PATENT_TITLE_9549' },
        { id: '6b7ead17-d30c-428f-9796-973ba8791ba3', title: 'PATENT_TITLE_6176' },
        { id: '7d340139-1cd8-472a-969c-6aaed3652d8b', title: 'PATENT_TITLE_4545' },
        { id: '11e6ae9f-13a2-4de0-bfa2-4482e29703ad', title: 'PATENT_TITLE_8592' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App