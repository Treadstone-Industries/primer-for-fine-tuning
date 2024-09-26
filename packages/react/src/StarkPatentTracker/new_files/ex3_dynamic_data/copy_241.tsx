import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '9257065b-72c5-485a-938f-d89555f246d0', title: 'PATENT_TITLE_2565' },
        { id: 'fb55518c-22f2-4b3d-a83e-1ccbe232b946', title: 'PATENT_TITLE_3017' },
        { id: '82465d06-66d0-42f2-93bd-4d4a5e1c01c4', title: 'PATENT_TITLE_8899' },
        { id: '8f4fc6af-f393-4032-a0d8-50dbcaea8a08', title: 'PATENT_TITLE_7951' },
        { id: '527ad452-2fc9-4486-8df6-3a417ee35c64', title: 'PATENT_TITLE_3943' },
        { id: 'e259a207-a216-4d32-aa33-615c842cb786', title: 'PATENT_TITLE_4509' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App