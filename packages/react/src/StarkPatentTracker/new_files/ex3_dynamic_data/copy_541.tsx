import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '1fdb51bb-861f-4d3b-901a-d1f8fe371294', title: 'PATENT_TITLE_2032' },
        { id: 'b8d776de-c1fc-4fd5-beba-e7907eef3072', title: 'PATENT_TITLE_2871' },
        { id: 'f3ca5617-009e-47da-82ff-53517f5ba976', title: 'PATENT_TITLE_7885' },
        { id: '1c677194-3d63-42db-901f-cec3b0139fff', title: 'PATENT_TITLE_8957' },
        { id: '8750b512-9737-4bba-a9a8-2267f1a631e7', title: 'PATENT_TITLE_8972' },
        { id: 'a40d4211-b67a-4652-ac1b-25510ff70931', title: 'PATENT_TITLE_9900' },
        { id: 'da9b8519-db17-4555-bcc8-19a342945d8e', title: 'PATENT_TITLE_2954' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App