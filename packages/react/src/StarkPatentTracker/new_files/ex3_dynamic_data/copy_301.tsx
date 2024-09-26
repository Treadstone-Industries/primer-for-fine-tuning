import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '2cd67867-2b1a-49fc-a4b2-f38a478bbffa', title: 'PATENT_TITLE_2812' },
        { id: '593781da-e050-4bfb-bb89-1893e64f4634', title: 'PATENT_TITLE_2163' },
        { id: 'edacd696-5d69-40d7-a772-26df3e35ff99', title: 'PATENT_TITLE_2901' },
        { id: 'f96f9cfa-9bc2-463d-8b11-9cb191f9d4eb', title: 'PATENT_TITLE_8318' },
        { id: '2c64799c-aec5-4e0d-934e-fa2b61ae3f5b', title: 'PATENT_TITLE_2665' },
        { id: 'beff9da0-c45c-41eb-9593-739710e102cb', title: 'PATENT_TITLE_5240' },
        { id: 'eb1b6faf-b902-47fb-bc9f-9f034f7f7305', title: 'PATENT_TITLE_9603' },
        { id: '488f6089-ca3a-410a-9aa5-8222ba3ca874', title: 'PATENT_TITLE_3916' },
        { id: '69eceff8-d4b4-4673-ba4c-ff20e4d593f4', title: 'PATENT_TITLE_1757' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App