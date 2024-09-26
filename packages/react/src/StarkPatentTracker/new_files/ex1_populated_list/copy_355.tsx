import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3637e35f-6c99-4030-9b42-cd3674c84ebb', title: 'PATENT_TITLE_2334' },
            { id: 'a66b27a5-3ee0-473e-9f36-45d9704a7e3c', title: 'PATENT_TITLE_3906' },
            { id: '4959a022-8e58-457d-a935-ec6c35e771a4', title: 'PATENT_TITLE_5971' },
            { id: '56c08cdd-e901-4974-93a7-1d89d7f4a880', title: 'PATENT_TITLE_5125' },
            { id: '56e3c4b1-286e-4c26-a453-03545d287d4f', title: 'PATENT_TITLE_5572' },
            { id: '5b08956b-f8a1-40a4-b97c-71c860766851', title: 'PATENT_TITLE_1654' },
            { id: 'fa699bf0-e291-4764-bd1e-8a58015278a1', title: 'PATENT_TITLE_8804' },
        ]}
    />
)

export default App