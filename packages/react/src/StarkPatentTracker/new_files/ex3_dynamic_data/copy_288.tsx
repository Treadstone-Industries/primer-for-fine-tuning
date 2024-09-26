import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '01dd4a00-80f9-433e-9925-d4bdc5d1624a', title: 'PATENT_TITLE_5754' },
        { id: 'be2e0045-1082-42b5-a769-94a1d1751234', title: 'PATENT_TITLE_2002' },
        { id: '1062723a-2c86-48a6-87d0-ee25b3d07ca6', title: 'PATENT_TITLE_6723' },
        { id: '9fbced5d-944d-419d-8ada-3704da1b03de', title: 'PATENT_TITLE_7875' },
        { id: '35a9dbe3-c972-4c8e-9641-c5021cbf7ab4', title: 'PATENT_TITLE_2586' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App