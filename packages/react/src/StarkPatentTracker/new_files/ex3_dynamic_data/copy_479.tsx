import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '32d2c1d6-507f-4ce3-b7aa-851479103188', title: 'PATENT_TITLE_8172' },
        { id: '0660bace-8df6-4a1a-9002-a565161fcd54', title: 'PATENT_TITLE_8650' },
        { id: '8e2fd858-af4f-42a4-998d-de89bd82d918', title: 'PATENT_TITLE_4038' },
        { id: 'a2618533-b15c-44b8-9bfc-c3e5bf931a9f', title: 'PATENT_TITLE_3038' },
        { id: 'f2345cc4-fa36-44e6-8381-623231e6b51d', title: 'PATENT_TITLE_9382' },
        { id: '8df2da39-7366-476c-b09c-1fad7ba3997a', title: 'PATENT_TITLE_2615' },
        { id: '92054917-29b8-482a-b764-72a720cabb82', title: 'PATENT_TITLE_5872' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App