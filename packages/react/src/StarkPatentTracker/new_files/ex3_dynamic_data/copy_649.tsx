import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'da8f40b2-0876-482e-a905-47560245c676', title: 'PATENT_TITLE_3584' },
        { id: '6525a914-945d-4d0f-a1de-135ccd95af76', title: 'PATENT_TITLE_4744' },
        { id: '6d5b6118-33b7-4afc-a481-6161dd166f07', title: 'PATENT_TITLE_8384' },
        { id: '6cc159e0-2c77-48ca-971b-ddf8f17a68e3', title: 'PATENT_TITLE_3226' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App