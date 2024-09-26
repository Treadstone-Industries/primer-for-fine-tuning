import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '1edbca71-68ec-470c-a740-3c4857340a50', title: 'PATENT_TITLE_3770' },
        { id: '2d061215-2426-4f12-b4bb-fac6abbe54e1', title: 'PATENT_TITLE_6278' },
        { id: 'eb57177f-e33a-46a1-9b9d-cce33b7a7478', title: 'PATENT_TITLE_8187' },
        { id: '2b20bb7a-35ce-45fd-a1c6-3d253b1054fc', title: 'PATENT_TITLE_2851' },
        { id: 'b0f30b86-0e8c-4f98-8669-632d39886fbc', title: 'PATENT_TITLE_2833' },
        { id: 'a9959406-6df5-4112-b47d-6b5e0528f212', title: 'PATENT_TITLE_4520' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App