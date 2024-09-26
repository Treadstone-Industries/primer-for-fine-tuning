import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0a312fbc-f765-4508-9b94-e95d0ff6ba6a', title: 'PATENT_TITLE_5978' },
        { id: '97c2a081-9e36-43ef-bcf4-9f5e3c4b5171', title: 'PATENT_TITLE_3515' },
        { id: 'f366c041-0c95-4e18-8966-5b5ab3b7ddc9', title: 'PATENT_TITLE_3077' },
        { id: 'a1167a3a-8279-4b73-8c68-8305f1ddd397', title: 'PATENT_TITLE_9318' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App