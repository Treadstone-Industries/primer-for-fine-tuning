import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '8f4e9d5b-eed4-40aa-9862-5038ae63327b', title: 'PATENT_TITLE_2619' },
        { id: 'a536cb45-8954-40a0-b704-1b44a0d7872c', title: 'PATENT_TITLE_4303' },
        { id: '848999a9-9445-477c-a9aa-cdedfc4adaad', title: 'PATENT_TITLE_4840' },
        { id: '2084c50a-ed31-42ae-8d2b-831452fd0eb0', title: 'PATENT_TITLE_8324' },
        { id: '01513ce3-4974-4226-b124-ef8ce3174d66', title: 'PATENT_TITLE_8705' },
        { id: '6bce4ae6-4910-49e9-928b-4192d84456c6', title: 'PATENT_TITLE_2371' },
        { id: '8c85e2cc-7a7b-4131-9c05-a372ababe5c4', title: 'PATENT_TITLE_5400' },
        { id: '19fab99f-9900-4710-b89d-1843cbf31e12', title: 'PATENT_TITLE_2184' },
        { id: '531d618f-f4d1-4f1a-a175-61c86a23b144', title: 'PATENT_TITLE_8179' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App