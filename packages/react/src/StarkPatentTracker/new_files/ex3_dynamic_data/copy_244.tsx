import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ce2216fc-a437-412a-870b-8e6af4ef8890', title: 'PATENT_TITLE_1213' },
        { id: '9144f887-dd1b-4f7e-a534-46ec4923fea1', title: 'PATENT_TITLE_8965' },
        { id: '50451494-2dbc-4de8-b6c3-f5e410358e0b', title: 'PATENT_TITLE_4627' },
        { id: '98fd88bc-592e-4c6e-a606-e03ae4ccc789', title: 'PATENT_TITLE_7822' },
        { id: 'f88c66c1-c8a7-4019-b3d4-25f26d39b721', title: 'PATENT_TITLE_6443' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App