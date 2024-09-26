import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f51aa356-42ae-40a8-a59a-ac985b66df36', title: 'PATENT_TITLE_9854' },
            { id: '30f46478-9d75-4530-8280-eaf88747074d', title: 'PATENT_TITLE_4911' },
            { id: '46ca481b-2b21-4ec1-be41-973806587b5c', title: 'PATENT_TITLE_8035' },
            { id: '4249afc7-4d89-4a2e-a348-2215c4c2e176', title: 'PATENT_TITLE_6805' },
            { id: '8bbee5de-ef80-41ea-80fa-e0e62e46e904', title: 'PATENT_TITLE_9059' },
            { id: 'fc538329-4c12-4ae9-9f22-5f021b1b070e', title: 'PATENT_TITLE_8406' },
            { id: 'c375b586-5347-4e21-8486-fdb2a906a5c8', title: 'PATENT_TITLE_4549' },
        ]}
    />
)

export default App