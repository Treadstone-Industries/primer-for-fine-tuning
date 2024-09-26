import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '134f0616-142c-41e8-a4fd-2ed1669abfd5', title: 'PATENT_TITLE_2427' },
        { id: 'caa21dfe-464f-403f-8b6d-bbf4f3980a22', title: 'PATENT_TITLE_7644' },
        { id: '101402de-8684-4e3f-a519-cde0c55cfe1c', title: 'PATENT_TITLE_3106' },
        { id: 'fe6f4a8e-9195-465b-b55d-4e7639a5f963', title: 'PATENT_TITLE_9366' },
        { id: '6e43273c-fa7a-44fe-83fa-2e3770cf43cc', title: 'PATENT_TITLE_8856' },
        { id: '6383854e-270d-45f9-8458-7f38d167d632', title: 'PATENT_TITLE_4828' },
        { id: 'c4c79921-eed3-4994-8bd1-7cf10e3060ae', title: 'PATENT_TITLE_6012' },
        { id: '933add14-9bb0-4d45-abf0-b720fff84c40', title: 'PATENT_TITLE_4022' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App