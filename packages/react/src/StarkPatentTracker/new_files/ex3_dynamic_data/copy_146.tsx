import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0602cfbe-6a3d-4054-a2d7-c747bcfebae8', title: 'PATENT_TITLE_2479' },
        { id: 'e60193b5-fbe9-4a6e-8d80-03d3b1438257', title: 'PATENT_TITLE_2976' },
        { id: '68f15c48-313a-40e5-9df0-4b3ccbf72320', title: 'PATENT_TITLE_8647' },
        { id: '193e68d3-a36f-419c-beaa-3aeabddbfdb7', title: 'PATENT_TITLE_7109' },
        { id: '55336d3e-5a79-448b-9e89-23c2b70ceb40', title: 'PATENT_TITLE_5245' },
        { id: 'aec3ca46-beef-4346-b360-fbb569f5a6dd', title: 'PATENT_TITLE_4804' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App