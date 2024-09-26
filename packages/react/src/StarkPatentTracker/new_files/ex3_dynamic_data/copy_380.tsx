import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '355d4302-e6e9-40ee-ab87-0b87d156c754', title: 'PATENT_TITLE_1269' },
        { id: '83cd02ca-b194-4d92-88f5-482891fa7ab5', title: 'PATENT_TITLE_1678' },
        { id: 'c614c549-cb5e-4946-8836-87ba5a775f33', title: 'PATENT_TITLE_6115' },
        { id: 'e991e836-0e59-41bb-b4ef-d129fae7a45f', title: 'PATENT_TITLE_9716' },
        { id: '448896a8-d26f-4be1-9a4b-93e3a0560483', title: 'PATENT_TITLE_9442' },
        { id: '51696468-b449-4912-ad90-2ebe8ea57c9c', title: 'PATENT_TITLE_5342' },
        { id: '7f68ca0f-f1f8-4c80-a248-0f735aab0100', title: 'PATENT_TITLE_8113' },
        { id: '842a3267-d862-402e-bf46-21b9768dd80e', title: 'PATENT_TITLE_8633' },
        { id: 'f82d1f49-2d76-47f0-b9b1-0e5738a3d71f', title: 'PATENT_TITLE_8823' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App