import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '16648dd2-c4cc-4e87-b114-511f5be1573f', title: 'PATENT_TITLE_9679' },
        { id: '5e33c92a-15bd-4190-aef1-31f5bd0ec1af', title: 'PATENT_TITLE_3052' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App