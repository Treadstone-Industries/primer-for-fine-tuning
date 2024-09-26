import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '5972be91-7ffa-4082-b7b6-629593155080', title: 'PATENT_TITLE_9204' },
        { id: '3269d39a-5f64-45d6-ab39-ab4c22bb82a9', title: 'PATENT_TITLE_6814' },
        { id: '98380654-0f3f-41fc-9925-93983ab86cf6', title: 'PATENT_TITLE_2703' },
        { id: 'c85b3e78-b70c-48ed-8cc3-d7e1eadd4340', title: 'PATENT_TITLE_4592' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App