import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '2565ca81-2d42-4834-aeb0-36452cc49a2d', title: 'PATENT_TITLE_5910' },
        { id: 'f2e8ab89-5f92-475e-ac7a-5000e75aea45', title: 'PATENT_TITLE_9475' },
        { id: 'a6abd430-1aec-48ff-ace8-abaa9bbee3e2', title: 'PATENT_TITLE_8189' },
        { id: '4756c74d-764c-48e6-a539-8b9980081e0c', title: 'PATENT_TITLE_8140' },
        { id: '36eeaa8b-7220-48c0-a8f5-d4deb9480c08', title: 'PATENT_TITLE_3674' },
        { id: 'afd1d6dc-ba47-4abb-a5a2-f1929090e96d', title: 'PATENT_TITLE_3243' },
        { id: 'e2939bc0-c0af-4407-90b6-f2e6a39b4a82', title: 'PATENT_TITLE_5079' },
        { id: 'e002ec59-fa4c-4293-9c6e-013ea6d77b4b', title: 'PATENT_TITLE_4374' },
        { id: 'bac59e97-1ea6-4fb0-b4b5-473ebeb5028b', title: 'PATENT_TITLE_7063' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App