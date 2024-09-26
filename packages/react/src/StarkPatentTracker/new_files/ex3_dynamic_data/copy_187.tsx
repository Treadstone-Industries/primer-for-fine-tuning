import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0d3ddeab-13c4-45cf-bcbd-ae9bcd97d09d', title: 'PATENT_TITLE_7955' },
        { id: '3d1a6541-9309-4b35-a7c3-adcfde939f2e', title: 'PATENT_TITLE_6683' },
        { id: '5104049a-d6ab-4342-ac94-5e86bdf0ea3e', title: 'PATENT_TITLE_2511' },
        { id: '17ecb41a-47d4-4c0d-b75c-d90c4a6a72e9', title: 'PATENT_TITLE_2525' },
        { id: '33be5aa5-0dd6-4ceb-881d-eeac06900670', title: 'PATENT_TITLE_5573' },
        { id: '8cc0cce7-7bf9-4464-8f02-b27a0033230d', title: 'PATENT_TITLE_7126' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App