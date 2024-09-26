import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '64940817-7365-4ee4-87af-356afe30c279', title: 'PATENT_TITLE_1978' },
        { id: '97d7085d-5579-4ad5-ab96-36779dfd0fb8', title: 'PATENT_TITLE_9636' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App