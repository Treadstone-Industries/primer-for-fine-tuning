import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'e63c65dc-fd3f-46df-ab37-8546aa176f7d', title: 'PATENT_TITLE_2846' },
        { id: 'a16636e0-3228-44b1-bdf3-be867a21cfa1', title: 'PATENT_TITLE_8025' },
        { id: '8a3591c0-e4ca-4322-a934-e09ff2535a26', title: 'PATENT_TITLE_9028' },
        { id: '793d692c-ebb1-4d52-be70-ea6299acea1b', title: 'PATENT_TITLE_2867' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App