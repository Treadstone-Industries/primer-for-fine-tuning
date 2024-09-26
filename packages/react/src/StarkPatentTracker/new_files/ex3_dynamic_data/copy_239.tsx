import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'bf706394-38ba-445b-849a-8dc023b66046', title: 'PATENT_TITLE_4862' },
        { id: '08c93647-4a2e-4237-a7c8-5c26f96e3807', title: 'PATENT_TITLE_8742' },
        { id: 'e1f88c7b-2a37-42be-932d-1171d9462286', title: 'PATENT_TITLE_7862' },
        { id: '8b8fc230-8ada-4283-bccf-762649fe31a1', title: 'PATENT_TITLE_9437' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App