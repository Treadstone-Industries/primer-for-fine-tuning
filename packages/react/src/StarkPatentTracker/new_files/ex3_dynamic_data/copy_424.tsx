import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'afa6f22f-6afc-409e-84e0-dd5700b4b87c', title: 'PATENT_TITLE_6021' },
        { id: 'f431a0f8-b220-4053-a32a-418d95048b7a', title: 'PATENT_TITLE_7725' },
        { id: 'b373f4be-562c-4671-a4c5-e292202d6787', title: 'PATENT_TITLE_9455' },
        { id: 'a4e9bb28-a1bf-4f34-8861-c27de8f2702d', title: 'PATENT_TITLE_1053' },
        { id: '1c53f788-7349-4266-9150-a90e7415bb9c', title: 'PATENT_TITLE_5380' },
        { id: 'c072828c-636f-41e8-96dc-99314ba4ee27', title: 'PATENT_TITLE_4021' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App