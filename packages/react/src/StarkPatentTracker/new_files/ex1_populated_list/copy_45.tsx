import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '8af6a422-43e1-4576-8633-e039afe9dfdf', title: 'PATENT_TITLE_7308' },
            { id: 'd573687a-2e30-4b12-bdc8-242181b65bf1', title: 'PATENT_TITLE_9105' },
            { id: '5a9785d0-84a3-4952-aa99-089cd6ef46f0', title: 'PATENT_TITLE_1129' },
            { id: 'eed5b95f-cf53-4884-a537-65d92d517b8f', title: 'PATENT_TITLE_4012' },
            { id: '73d0fb6c-f15e-4141-abeb-e50bc55ccf19', title: 'PATENT_TITLE_3196' },
            { id: 'fdc3a81c-a3d6-45d8-b04f-37730c949673', title: 'PATENT_TITLE_8935' },
            { id: 'eec1639d-6ca4-4d84-be7e-beedcb03e7c7', title: 'PATENT_TITLE_4399' },
            { id: 'bbb6732a-4100-4287-9984-53cb2ae41f3f', title: 'PATENT_TITLE_8714' },
        ]}
    />
)

export default App