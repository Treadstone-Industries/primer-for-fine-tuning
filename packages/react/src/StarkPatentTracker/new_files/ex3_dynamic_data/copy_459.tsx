import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'f49139fb-e89e-4444-b65a-c2d84f39aabf', title: 'PATENT_TITLE_5383' },
        { id: '8ecc2ee6-edec-47e7-96cc-2d9e1c49d83d', title: 'PATENT_TITLE_6739' },
        { id: '24d2f93b-b443-41a1-84bf-14b7271b3a0f', title: 'PATENT_TITLE_7785' },
        { id: '982b9f8f-1a29-42a1-9d6b-35b7125df92f', title: 'PATENT_TITLE_5497' },
        { id: '91dda473-de86-4404-9ab0-759724ef482c', title: 'PATENT_TITLE_4499' },
        { id: '38e542da-eb75-4321-a035-945154eb161a', title: 'PATENT_TITLE_2730' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App