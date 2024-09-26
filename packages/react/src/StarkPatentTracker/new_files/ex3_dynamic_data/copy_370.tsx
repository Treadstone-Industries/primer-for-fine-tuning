import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '1bd7432f-8547-40ae-8de4-4f97c7e1d159', title: 'PATENT_TITLE_7610' },
        { id: '83036013-9f46-43a0-861e-bd7120e45b5b', title: 'PATENT_TITLE_7774' },
        { id: '0c713e73-5fd0-4836-9591-d4a2d7b6d8e0', title: 'PATENT_TITLE_4796' },
        { id: '94c866d6-d99a-4764-af57-18519f967438', title: 'PATENT_TITLE_2999' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App