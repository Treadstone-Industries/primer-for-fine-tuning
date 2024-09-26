import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a5982b51-53e2-4760-a521-28ef3274b6aa', title: 'PATENT_TITLE_5470' },
        { id: '1a8fd2dd-7a9b-4e71-bbb3-aca6c5107835', title: 'PATENT_TITLE_6466' },
        { id: '37fe3e66-7dcd-4877-baba-336f97ce73a4', title: 'PATENT_TITLE_2491' },
        { id: '35014f1d-62eb-49df-874b-1228b6f21e19', title: 'PATENT_TITLE_5716' },
        { id: 'da2cd448-49cc-425e-a3b5-4644baab0dd9', title: 'PATENT_TITLE_1107' },
        { id: '1562c872-ebcb-476e-810b-d4582847323d', title: 'PATENT_TITLE_7167' },
        { id: '1bfd03f1-f441-4a07-84c7-339779b5f350', title: 'PATENT_TITLE_9527' },
        { id: '0b3297a4-40d2-469e-bc57-c3c535972ffb', title: 'PATENT_TITLE_5849' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App