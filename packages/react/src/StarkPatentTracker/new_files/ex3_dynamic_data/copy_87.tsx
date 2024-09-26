import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0e1adecb-a2dc-4f66-8a3c-41aba275df52', title: 'PATENT_TITLE_3243' },
        { id: 'acf51f8f-45b6-45d0-9832-735388d4c235', title: 'PATENT_TITLE_1959' },
        { id: '934b03eb-5c21-48f0-a0d4-314b47f5a089', title: 'PATENT_TITLE_8217' },
        { id: '635a6816-fbe0-49a8-a95f-dbb0801b38d5', title: 'PATENT_TITLE_3092' },
        { id: '87bd8b04-4c16-4de5-9512-25da13f9fa2e', title: 'PATENT_TITLE_9706' },
        { id: '3add7667-e29c-449f-b8e5-c1086282eb78', title: 'PATENT_TITLE_6986' },
        { id: '6f85ea30-2bc7-461e-8df1-c5a2a8cfd9e9', title: 'PATENT_TITLE_7182' },
        { id: '4610eb5f-e549-44aa-99fb-3976cbca6fef', title: 'PATENT_TITLE_2850' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App