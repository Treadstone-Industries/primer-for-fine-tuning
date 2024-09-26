import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '42756b0c-eaa5-41ee-98c0-5a81c2ada8a5', title: 'PATENT_TITLE_9059' },
        { id: '6fac6b56-35bf-49e0-831d-c670e004d1f3', title: 'PATENT_TITLE_2043' },
        { id: '7c111c0e-2e9a-463a-825e-4921bb54635b', title: 'PATENT_TITLE_2340' },
        { id: '8c6cee72-fe57-4a99-bc37-c6c24437d9fe', title: 'PATENT_TITLE_1876' },
        { id: '49d0f655-91b0-4715-a3b7-46e2d1bc5a15', title: 'PATENT_TITLE_6267' },
        { id: '69784a8d-84d6-47b7-9350-bd109daf35e1', title: 'PATENT_TITLE_2645' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App