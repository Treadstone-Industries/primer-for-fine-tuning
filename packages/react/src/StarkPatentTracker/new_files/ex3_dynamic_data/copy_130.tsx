import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '8b31975e-8815-4cde-92db-189f5515df92', title: 'PATENT_TITLE_5317' },
        { id: 'e1551931-f0d2-4aa7-b966-09d9c274a93a', title: 'PATENT_TITLE_1665' },
        { id: 'c0581bf7-e74e-488f-a088-4d585c830129', title: 'PATENT_TITLE_9364' },
        { id: 'c47cd963-ab6a-4e21-b7c9-9004f7f5ff15', title: 'PATENT_TITLE_4252' },
        { id: '518b4398-62db-4806-a142-6bcee541d835', title: 'PATENT_TITLE_5958' },
        { id: '184c7022-987a-4183-badd-a17bd9075eb1', title: 'PATENT_TITLE_6960' },
        { id: 'fb1adeeb-e26c-4a38-9898-6c2d6ceb1294', title: 'PATENT_TITLE_7582' },
        { id: 'a85900cd-bddf-49cd-a3dd-cd800da0a831', title: 'PATENT_TITLE_5158' },
        { id: 'f673a8f3-bec1-4497-ac09-09906a504560', title: 'PATENT_TITLE_3264' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App