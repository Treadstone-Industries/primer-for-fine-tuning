import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'fbfcc2cb-8a7e-4723-90c7-a3c967c77959', title: 'PATENT_TITLE_6204' },
        { id: '6bc8d838-d94d-4286-bc1f-0594a2498e7a', title: 'PATENT_TITLE_5541' },
        { id: 'a8fe4493-a1d5-4093-8031-52409de3b2b6', title: 'PATENT_TITLE_6449' },
        { id: '3f62eba0-1e96-4b93-84ca-5716a747f09c', title: 'PATENT_TITLE_2356' },
        { id: '2e765743-031f-4cc1-97ed-54023a7b5465', title: 'PATENT_TITLE_5096' },
        { id: '5c971c35-689e-494c-9eb5-428a01b73dde', title: 'PATENT_TITLE_3388' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App