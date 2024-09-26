import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0d8e294a-dd31-4c0b-8978-a3759ca9b6c4', title: 'PATENT_TITLE_2765' },
        { id: '6d04427e-3c8f-4b43-b106-34b3732a6080', title: 'PATENT_TITLE_9842' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App