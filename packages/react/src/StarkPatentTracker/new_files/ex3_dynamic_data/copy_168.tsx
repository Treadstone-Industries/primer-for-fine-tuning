import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '583378cc-047c-4706-9dc6-f31967279a59', title: 'PATENT_TITLE_9966' },
        { id: '3ed3de23-0ee3-474a-9870-80a4479a8ea3', title: 'PATENT_TITLE_7181' },
        { id: '760b1331-8df4-43d5-8057-104a2205491f', title: 'PATENT_TITLE_4503' },
        { id: '61a1dd6e-f90c-4ca6-92f4-264c76debca2', title: 'PATENT_TITLE_7562' },
        { id: 'f7c41d72-5053-417d-865d-d03812569dc0', title: 'PATENT_TITLE_9887' },
        { id: '95dcded3-f571-48f6-aedf-d741c91e6962', title: 'PATENT_TITLE_9427' },
        { id: '94d056af-7ec7-4db7-a446-d87aea22c517', title: 'PATENT_TITLE_2719' },
        { id: 'fdeada69-68b0-4653-8c5b-f3c84e5e3b5b', title: 'PATENT_TITLE_5811' },
        { id: '1d537c02-2f92-4b0a-b4a4-eee929fe5726', title: 'PATENT_TITLE_7812' },
        { id: '7f75338e-6f68-4b63-86df-ceeb737cbdb3', title: 'PATENT_TITLE_5473' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App