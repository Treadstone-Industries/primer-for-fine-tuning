import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '5f8816d5-002a-4299-87a3-f19da20fe9bb', title: 'PATENT_TITLE_5567' },
        { id: '556493bf-958b-4e9b-bc47-94ba32ccbf11', title: 'PATENT_TITLE_7926' },
        { id: '31109554-4bd7-4f17-91f7-076b8eb6cdb4', title: 'PATENT_TITLE_3991' },
        { id: '515162e0-36e9-4346-ac0c-8212ff1edbe9', title: 'PATENT_TITLE_2257' },
        { id: '22c74ebd-07a6-47b1-ae60-df3d260942d7', title: 'PATENT_TITLE_6262' },
        { id: '0db1f859-71d6-477a-afa3-10d5999ad701', title: 'PATENT_TITLE_5205' },
        { id: 'cae6ae08-f678-4ccc-800b-0f3d24ee7206', title: 'PATENT_TITLE_2003' },
        { id: 'a2f3b2bc-d604-48ab-beb0-1b4707df5cd8', title: 'PATENT_TITLE_1567' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App