import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '74420119-bc5c-4b1a-b770-cc21469045ac', title: 'PATENT_TITLE_5681' },
        { id: '1be4b7c1-a97f-4ce2-bbb8-a9c344ea3069', title: 'PATENT_TITLE_3025' },
        { id: '3840797b-b3b6-4b13-bc66-9e0e71ee4872', title: 'PATENT_TITLE_2279' },
        { id: '5451c0d6-69f9-4429-8323-14078fec5a78', title: 'PATENT_TITLE_2489' },
        { id: '3d746175-ac6b-4716-90e9-2802c3a27bba', title: 'PATENT_TITLE_2672' },
        { id: 'a0fb1f08-6dca-4721-92ea-a148ecf80e88', title: 'PATENT_TITLE_2411' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App