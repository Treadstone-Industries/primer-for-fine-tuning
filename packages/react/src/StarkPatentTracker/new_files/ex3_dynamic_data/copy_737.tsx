import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '7e527303-a87f-41f5-9e6a-bc537e9e69a3', title: 'PATENT_TITLE_8497' },
        { id: 'c1010d2e-1889-496b-9034-24242552cc3a', title: 'PATENT_TITLE_9931' },
        { id: 'c6e83e25-b966-417e-833e-ccc02f49cc05', title: 'PATENT_TITLE_5432' },
        { id: '2691f23a-35f8-4962-a30f-61ae600230d6', title: 'PATENT_TITLE_9079' },
        { id: '0df66e68-d2b1-4e8c-a057-dcf282237c3b', title: 'PATENT_TITLE_1357' },
        { id: 'ed24862b-91ad-4da0-9326-c073e1515fd0', title: 'PATENT_TITLE_9466' },
        { id: '3896b1ec-40a9-45a9-ab32-3660f2df61aa', title: 'PATENT_TITLE_3363' },
        { id: 'e9166a39-f18a-4ba3-981d-da56ccba6047', title: 'PATENT_TITLE_6784' },
        { id: '359a6176-20db-458a-bed5-b257bd0b4f6a', title: 'PATENT_TITLE_8054' },
        { id: '1ca7d213-0c9c-46a0-b9ae-d74d26e06f8f', title: 'PATENT_TITLE_2850' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App