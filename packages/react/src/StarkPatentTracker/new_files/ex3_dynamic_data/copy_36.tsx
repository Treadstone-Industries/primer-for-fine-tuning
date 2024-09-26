import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'acba7e8b-ff39-48dc-a1c9-447f3d2151a5', title: 'PATENT_TITLE_7342' },
        { id: '1c046631-487e-49e4-b12b-d36a811ecb9e', title: 'PATENT_TITLE_7441' },
        { id: 'f438a1ea-0f0f-4e7a-be25-7d3814888992', title: 'PATENT_TITLE_6379' },
        { id: '497b2b97-39aa-4b37-ac8a-9e4bcc74ff3f', title: 'PATENT_TITLE_1123' },
        { id: 'd1eb2880-5ca9-4d87-ada5-0f766820ea55', title: 'PATENT_TITLE_8923' },
        { id: '5eabcff7-bb6f-4459-a589-f0cfc46ef4ac', title: 'PATENT_TITLE_3282' },
        { id: '9b3e379e-0a0c-4da5-b58c-80d9affac544', title: 'PATENT_TITLE_5469' },
        { id: '36129dab-fa0e-49ed-816f-c0043b40857e', title: 'PATENT_TITLE_4202' },
        { id: 'f81a6a8c-f877-4bba-955e-30450d27e13f', title: 'PATENT_TITLE_7032' },
        { id: '08b0aab5-8764-4a0d-bdcd-ef4859070463', title: 'PATENT_TITLE_2482' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App