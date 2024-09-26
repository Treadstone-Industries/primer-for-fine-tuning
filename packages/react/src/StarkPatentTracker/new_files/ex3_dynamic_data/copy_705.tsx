import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '16d8f6e5-c430-497c-9a3c-ce1b97e3bb97', title: 'PATENT_TITLE_6499' },
        { id: 'e0292b5f-17b4-4c8b-bd9c-28dcc4f1eec4', title: 'PATENT_TITLE_7973' },
        { id: 'd57ad164-ebee-49b9-8423-b8e9707ac175', title: 'PATENT_TITLE_5908' },
        { id: '38fa61bd-0b47-4db1-afcd-4e1662c2d076', title: 'PATENT_TITLE_9869' },
        { id: 'ff376d4c-9f0a-4821-aa42-26ccc10b234a', title: 'PATENT_TITLE_9661' },
        { id: 'c52aea98-e7d6-4269-9f88-9b26fc2f7ace', title: 'PATENT_TITLE_7697' },
        { id: '5472394f-1567-4d28-bdc7-83d89ba67c8e', title: 'PATENT_TITLE_1141' },
        { id: 'a3ba4a09-47fd-4681-8045-8b70c5e4f498', title: 'PATENT_TITLE_4860' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App