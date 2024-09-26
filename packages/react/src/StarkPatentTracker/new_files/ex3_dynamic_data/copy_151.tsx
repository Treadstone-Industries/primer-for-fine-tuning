import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a6a8aaaf-3567-4e9a-9140-770af94c5cac', title: 'PATENT_TITLE_9731' },
        { id: '6b319832-3615-4486-bc57-74f4a3f5e778', title: 'PATENT_TITLE_9893' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App