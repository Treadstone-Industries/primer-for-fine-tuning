import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '5978eb78-fa69-4317-86a7-a71dde77b288', title: 'PATENT_TITLE_8229' },
            { id: 'f1cee73b-2325-41de-b5f5-b77e54a42b37', title: 'PATENT_TITLE_4182' },
            { id: '30f8bbcf-e503-430a-887d-651e072309fd', title: 'PATENT_TITLE_2940' },
            { id: 'a139d0b5-2c75-4301-a20b-a36cb5e858ed', title: 'PATENT_TITLE_5633' },
            { id: '70078b39-47bf-4fbf-a259-678a79459c4f', title: 'PATENT_TITLE_7727' },
            { id: '352bb85e-6b89-4418-bede-7e1cff805cf6', title: 'PATENT_TITLE_2112' },
            { id: '33faff59-78c7-4e66-9d35-46d14e3ae555', title: 'PATENT_TITLE_1588' },
            { id: '89e5e9f0-9fff-4437-96df-3e00c49154ec', title: 'PATENT_TITLE_1625' },
            { id: '542652fd-a171-43b9-aab0-7d70e3ee89b1', title: 'PATENT_TITLE_1393' },
            { id: '134ef905-1e68-408e-a3f0-43f75515870c', title: 'PATENT_TITLE_4544' },
        ]}
    />
)

export default App