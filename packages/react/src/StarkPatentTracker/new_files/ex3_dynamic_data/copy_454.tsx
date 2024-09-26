import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '91c85933-be9b-49c6-bd59-2147d3c0e543', title: 'PATENT_TITLE_1526' },
        { id: '82f02fb5-a71d-4fa1-bd09-b35e29ff8d80', title: 'PATENT_TITLE_3722' },
        { id: 'b5436118-76dd-496a-8dbe-ab2f7bb77126', title: 'PATENT_TITLE_9729' },
        { id: '15da30f4-c49a-4907-82ed-e5ef15f189ef', title: 'PATENT_TITLE_2853' },
        { id: '031fc2e8-7704-4475-a164-0d6cf6d7ab0a', title: 'PATENT_TITLE_3264' },
        { id: '868ef119-9885-48c4-bf9d-6a53defeca8b', title: 'PATENT_TITLE_5617' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App