import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '9e5f800f-2a60-4ad7-9099-fe94fb843fc3', title: 'PATENT_TITLE_5385' },
        { id: 'a9d4b1dc-b5d9-4193-8f25-6fafe7833696', title: 'PATENT_TITLE_4416' },
        { id: '01ce8124-09cc-4fc4-b9e6-648b8ed1a710', title: 'PATENT_TITLE_6449' },
        { id: '48a61b50-0044-4c04-a2f0-94879355643b', title: 'PATENT_TITLE_1932' },
        { id: '9fd14daa-20d1-46af-906a-096b87630959', title: 'PATENT_TITLE_8952' },
        { id: 'a574b1d2-4179-44f3-bd54-78675d31f31b', title: 'PATENT_TITLE_6055' },
        { id: '1362a917-253b-458a-a8ca-fa2d16336216', title: 'PATENT_TITLE_3507' },
        { id: '80e7837f-c1dd-4d7a-ad6e-6219f4e67d94', title: 'PATENT_TITLE_6795' },
        { id: 'e75d53e8-718e-4e08-b989-58e755cfcb7e', title: 'PATENT_TITLE_3610' },
        { id: 'a6ef53dc-6112-4497-ad76-d7627ae62407', title: 'PATENT_TITLE_2378' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App