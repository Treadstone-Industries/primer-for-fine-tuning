import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '01cfb230-89a6-49e0-8387-5704b459fe42', title: 'PATENT_TITLE_3522' },
        { id: '1b480d7a-ca21-450a-a44b-27f38176c59b', title: 'PATENT_TITLE_6000' },
        { id: '976b9026-4c50-4e31-9b15-0c7bb7fc8d6d', title: 'PATENT_TITLE_9822' },
        { id: '025126e7-9a35-492e-819b-c541e13774d8', title: 'PATENT_TITLE_4384' },
        { id: '539e9e02-afbe-46d7-beba-5f3cb58986e7', title: 'PATENT_TITLE_9622' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App