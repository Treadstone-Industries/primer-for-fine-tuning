import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '54adee24-b586-4532-8e85-75ac045f1aa8', title: 'PATENT_TITLE_5313' },
        { id: '1bc4b3be-52c2-4e00-aa97-e2b187dd17d4', title: 'PATENT_TITLE_3693' },
        { id: 'eb489412-025c-4ca1-9d73-83eb208be567', title: 'PATENT_TITLE_9031' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App