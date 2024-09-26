import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '4c93fa99-5c54-4671-b625-752402507c37', title: 'PATENT_TITLE_8468' },
        { id: '406e3152-e35f-4b03-be2a-31ea39313875', title: 'PATENT_TITLE_5642' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App