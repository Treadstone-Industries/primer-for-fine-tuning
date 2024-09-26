import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '1bccf15d-6b47-4d7f-9c69-ef29cd96a58a', title: 'PATENT_TITLE_6694' },
        { id: '618171cf-9ab9-49f8-beef-521f9b89667d', title: 'PATENT_TITLE_9127' },
        { id: 'ad20cced-9854-4644-b038-dcb0699762bf', title: 'PATENT_TITLE_5733' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App