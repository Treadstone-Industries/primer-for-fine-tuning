import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '5c6c41e8-7629-4123-9959-2650610262f4', title: 'PATENT_TITLE_2769' },
        { id: 'b40fa114-4641-43ab-b718-02c799363e6c', title: 'PATENT_TITLE_1077' },
        { id: 'd7847e4d-e7dd-46b4-9223-cd9fd0862b7f', title: 'PATENT_TITLE_9414' },
        { id: '94d1a67a-bbe5-411d-bb86-c8fe2ca21947', title: 'PATENT_TITLE_5871' },
        { id: '7bab0ec8-6e84-4dfd-ac57-074275070851', title: 'PATENT_TITLE_6342' },
        { id: '4d345a94-70ba-4b66-a93e-a0ad445a8ad5', title: 'PATENT_TITLE_9640' },
        { id: '6cde8712-81fd-4fa8-be8f-1aeef5f14dcf', title: 'PATENT_TITLE_5368' },
        { id: '1907a9d9-76d0-49db-8967-212f8730781c', title: 'PATENT_TITLE_8168' },
        { id: '9c50e72e-9f24-483a-b488-b4c0e2f19c9f', title: 'PATENT_TITLE_2991' },
        { id: 'fef5e8d5-d568-43ad-9bf8-11049544f8c3', title: 'PATENT_TITLE_3250' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App