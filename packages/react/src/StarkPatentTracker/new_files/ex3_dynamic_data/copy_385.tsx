import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'afea696e-c6c2-4ac7-84d1-4b1c0dc129bd', title: 'PATENT_TITLE_8522' },
        { id: '69127b27-5da6-49c9-ad8f-65a5cefca091', title: 'PATENT_TITLE_9989' },
        { id: '02957c9b-ffac-40d8-9cf3-ea9dc5d8147a', title: 'PATENT_TITLE_7298' },
        { id: '8f3f9c1a-92f4-4143-a6f7-b324402301c1', title: 'PATENT_TITLE_1650' },
        { id: '5a263779-4c66-450a-9b80-91c7965d665b', title: 'PATENT_TITLE_6369' },
        { id: '08c4f2bc-db38-4f41-86c3-fcf64481485b', title: 'PATENT_TITLE_1223' },
        { id: '2ef82df5-997a-4c6b-a2a1-275fcc04aecd', title: 'PATENT_TITLE_9464' },
        { id: '338595be-482b-4024-ad28-2f3ab9eedfdd', title: 'PATENT_TITLE_9993' },
        { id: 'd56f275e-5a8a-4439-8a32-aa0f24177198', title: 'PATENT_TITLE_3649' },
        { id: '139533ad-3877-4905-975b-077fa7bf21cc', title: 'PATENT_TITLE_2479' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App