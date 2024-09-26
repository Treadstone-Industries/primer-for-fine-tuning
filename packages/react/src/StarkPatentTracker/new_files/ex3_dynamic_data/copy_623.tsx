import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '45829ff8-96d2-4a87-a527-96477d21fb63', title: 'PATENT_TITLE_5278' },
        { id: '3868f9ea-6083-455a-a9b1-0e19fa27cf74', title: 'PATENT_TITLE_5973' },
        { id: 'b6dd9e19-1eb7-40d4-9719-621c04d8b084', title: 'PATENT_TITLE_4751' },
        { id: '33d8410f-bace-4fd3-9112-ad9bb7626d51', title: 'PATENT_TITLE_5433' },
        { id: '4a0276cf-a083-4440-b03a-e229d83d23ef', title: 'PATENT_TITLE_2208' },
        { id: 'c868ea03-dfa2-4e80-9a79-c527a15079a4', title: 'PATENT_TITLE_1472' },
        { id: '8cf540a0-c295-42d6-8316-d578f43a8759', title: 'PATENT_TITLE_7511' },
        { id: '33e7a49c-3a55-4499-83bf-f84ca086771e', title: 'PATENT_TITLE_4830' },
        { id: 'daba7fec-b8d3-47b1-a191-f7322aae613b', title: 'PATENT_TITLE_6366' },
        { id: '6491f5e9-47ff-4deb-8c09-b1f057735dd1', title: 'PATENT_TITLE_3113' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App