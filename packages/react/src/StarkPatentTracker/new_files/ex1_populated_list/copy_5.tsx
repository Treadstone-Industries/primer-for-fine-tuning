import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '8816ee0f-0328-480c-9f4d-df92f0e5a29a', title: 'PATENT_TITLE_3145' },
            { id: '6342f9a1-256f-49fd-8bff-7943981bc496', title: 'PATENT_TITLE_8137' },
            { id: 'f5979da8-ff9c-4898-8e4c-aa754801ce71', title: 'PATENT_TITLE_7889' },
            { id: '5fef015d-d4b5-48f2-a2ac-c933bb12158d', title: 'PATENT_TITLE_8011' },
            { id: '9c802603-0ca6-4a69-970a-a858a21ee9b2', title: 'PATENT_TITLE_3286' },
            { id: 'd6b6d51a-8b6c-4b6d-97d7-49b06f978233', title: 'PATENT_TITLE_7153' },
        ]}
    />
)

export default App