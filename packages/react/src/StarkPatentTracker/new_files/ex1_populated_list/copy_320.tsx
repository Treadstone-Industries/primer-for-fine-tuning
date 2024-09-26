import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '488f5b2b-b6b8-4602-8df6-47f336c95d12', title: 'PATENT_TITLE_7696' },
            { id: 'c761af80-9035-406b-b2bb-dff2001c44c9', title: 'PATENT_TITLE_6994' },
            { id: '00eed6a0-3d4c-4961-a4bb-9a545f2d9cae', title: 'PATENT_TITLE_3884' },
            { id: 'd2c2783f-7e51-4fc4-9c62-ab3ce02c3f30', title: 'PATENT_TITLE_6751' },
            { id: '02932691-bc5d-40e5-b2cd-fd79ae70c8ec', title: 'PATENT_TITLE_5907' },
            { id: '3f83c75f-8297-401e-9abb-d7e84a1a0a1f', title: 'PATENT_TITLE_6357' },
            { id: '71d01a5b-e29c-49f7-810f-ddf4e3e5915f', title: 'PATENT_TITLE_9180' },
        ]}
    />
)

export default App