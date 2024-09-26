import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b9dfd6b1-51a3-4b08-9619-d57c063548a7', title: 'PATENT_TITLE_3462' },
        { id: '1e7c2735-f7d0-4e5b-887f-9d4b0cd657a6', title: 'PATENT_TITLE_6899' },
        { id: '03ac6bc8-333e-4b1b-91fa-1d3bcee065e4', title: 'PATENT_TITLE_6347' },
        { id: 'eabad7a7-16d9-4418-b65f-c0cc505624e1', title: 'PATENT_TITLE_3295' },
        { id: '3e291521-5142-4ba1-9976-9bcaf8617c03', title: 'PATENT_TITLE_9197' },
        { id: '7b69826d-e172-413e-b014-966fb5131606', title: 'PATENT_TITLE_2895' },
        { id: 'b8ddc5a3-90e9-4ba7-b156-bf4cc5b667c1', title: 'PATENT_TITLE_3827' },
        { id: 'f6db4466-d745-4591-969c-ce500086dba4', title: 'PATENT_TITLE_8432' },
        { id: 'dd0345f7-be23-497a-9379-fc0295fece5a', title: 'PATENT_TITLE_5069' },
        { id: 'e9340a8d-374c-495f-9d6a-6d9892e7a598', title: 'PATENT_TITLE_5983' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App