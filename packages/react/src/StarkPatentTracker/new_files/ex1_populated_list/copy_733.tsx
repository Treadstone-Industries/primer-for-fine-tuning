import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'be4e9ce8-3e0a-4132-b503-75d9266f5765', title: 'PATENT_TITLE_9640' },
            { id: '4e0172fb-9cd4-45eb-8cd8-9d473a77333b', title: 'PATENT_TITLE_9723' },
            { id: '1df8cd57-3f7c-45ef-bd99-030014780d0f', title: 'PATENT_TITLE_8999' },
            { id: '1e4054a9-ddf6-4911-9439-f7933457f92d', title: 'PATENT_TITLE_5420' },
            { id: '72335b5c-1131-4ee8-9c21-193425db26ba', title: 'PATENT_TITLE_2038' },
            { id: '425191a8-62d7-42bb-bd7f-f5037a684f10', title: 'PATENT_TITLE_1279' },
            { id: '5ffa7c65-42a4-46e8-9be9-f54680eaec79', title: 'PATENT_TITLE_7517' },
        ]}
    />
)

export default App