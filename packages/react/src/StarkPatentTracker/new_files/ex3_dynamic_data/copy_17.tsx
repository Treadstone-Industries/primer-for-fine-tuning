import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'f8df3ab8-53a7-4cf7-9f25-33f498ef566d', title: 'PATENT_TITLE_6820' },
        { id: 'd8a04f25-c728-4e0d-959c-40d317e2403c', title: 'PATENT_TITLE_7999' },
        { id: '93a27704-76db-4943-ba47-21ea0d1600ca', title: 'PATENT_TITLE_5278' },
        { id: 'c945d7a6-665c-49a6-81ae-906409270969', title: 'PATENT_TITLE_7761' },
        { id: '54127585-1d6a-4f2b-b1ee-f9d4a77cd3cb', title: 'PATENT_TITLE_2550' },
        { id: '52c66b26-228e-4b64-8964-8f5f7cc49ed3', title: 'PATENT_TITLE_4322' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App