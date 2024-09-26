import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0e09161e-0ead-46b5-9079-b54043c7fb41', title: 'PATENT_TITLE_6092' },
        { id: 'd169a358-9535-490c-8aa1-867ef91c2bda', title: 'PATENT_TITLE_5317' },
        { id: 'd6559c4b-bf57-4b93-b8f7-8cbeba1c5b61', title: 'PATENT_TITLE_1536' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App