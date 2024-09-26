import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '5cf02637-2d22-4ecd-8bb1-5f05bbdacf58', title: 'PATENT_TITLE_1048' },
        { id: '8e5f6410-ae6b-40dd-887c-ab3459bc2837', title: 'PATENT_TITLE_9002' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App