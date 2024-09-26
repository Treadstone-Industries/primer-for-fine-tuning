import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '8a7d5906-6d74-47af-9c37-32dca8973de4', title: 'PATENT_TITLE_2920' },
        { id: '75250e2f-734a-4319-bd6b-9cc9b93b43fd', title: 'PATENT_TITLE_5730' },
        { id: 'b34e8749-4690-4674-826e-b92253f1b086', title: 'PATENT_TITLE_9089' },
        { id: '8686829b-a19e-45d3-94ff-3bdab23e4c0a', title: 'PATENT_TITLE_3890' },
        { id: '873e5b31-cced-48d4-8be8-51e48122a0a2', title: 'PATENT_TITLE_2977' },
        { id: '18bcd62b-0ff1-4913-abda-f61d198dabf3', title: 'PATENT_TITLE_5965' },
        { id: 'bf325881-0dea-4f8b-9717-0d080a8cc1f7', title: 'PATENT_TITLE_4671' },
        { id: '622091c7-3457-4ce7-82d1-bb7b206de0f6', title: 'PATENT_TITLE_2695' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App