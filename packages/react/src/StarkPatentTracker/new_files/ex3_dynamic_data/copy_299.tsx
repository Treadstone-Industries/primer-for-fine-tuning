import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'd9dc7772-4e91-41bc-95f9-7c74aefde215', title: 'PATENT_TITLE_7775' },
        { id: '00b50c6c-00eb-4e38-b894-e3f4af88a541', title: 'PATENT_TITLE_2252' },
        { id: '6ee7ada3-e23a-44bb-912f-793bcdb50041', title: 'PATENT_TITLE_9923' },
        { id: 'de899c38-eb6c-4372-af38-85c669e6a35b', title: 'PATENT_TITLE_7957' },
        { id: '0044729a-b346-4707-9e85-5bed7ad3a6e5', title: 'PATENT_TITLE_7747' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App