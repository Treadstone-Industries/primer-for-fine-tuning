import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'cc5d33a0-d8df-4bd2-a503-e421ea2aa5dc', title: 'PATENT_TITLE_7914' },
        { id: '1d3b8365-2ccc-413b-bd07-9fb00f8826f0', title: 'PATENT_TITLE_8323' },
        { id: '5a56b2b0-91d7-45ee-9eaf-f624a1aa72aa', title: 'PATENT_TITLE_3069' },
        { id: 'e1ee784f-b33a-4d19-a6e2-f85c2a713319', title: 'PATENT_TITLE_8116' },
        { id: '070c98b1-c770-4830-91ee-42293b0dc96e', title: 'PATENT_TITLE_6278' },
        { id: '03f09d3d-9fad-4df5-aec1-8b4113b4ad58', title: 'PATENT_TITLE_7676' },
        { id: 'ba5a0d54-a3a3-4619-9a2d-7431f90aa6f3', title: 'PATENT_TITLE_2407' },
        { id: '66b8ab99-adb0-4ea8-a3d7-7904533abc4f', title: 'PATENT_TITLE_5197' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App