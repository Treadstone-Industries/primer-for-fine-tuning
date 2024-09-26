import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0313f264-61c6-474f-9ea3-1bb32dacfeba', title: 'PATENT_TITLE_3566' },
        { id: 'd7122678-1359-46af-8a8e-4e8b2a8ad7bc', title: 'PATENT_TITLE_3544' },
        { id: '9e591bba-97fa-44e0-be4e-d250b3018787', title: 'PATENT_TITLE_1682' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App