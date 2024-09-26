import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'bb9769fa-73bd-4520-a348-fba188a55a33', title: 'PATENT_TITLE_7853' },
            { id: '9b5ea1ff-21e3-46c5-b472-b9db2f4cbec8', title: 'PATENT_TITLE_5353' },
            { id: '386a9f6e-dc84-40ac-b9f3-5a7a2694035c', title: 'PATENT_TITLE_6656' },
            { id: 'dc433b32-09e7-42c9-b0c1-38c6b8a21673', title: 'PATENT_TITLE_7820' },
            { id: 'd2430b56-a13d-44b7-8685-8e2fa2a54f46', title: 'PATENT_TITLE_3211' },
            { id: '0122f66f-0920-4e56-a749-690b11612448', title: 'PATENT_TITLE_7322' },
            { id: 'bca1dd80-651d-4dc2-b5bf-e951134d94d8', title: 'PATENT_TITLE_3701' },
            { id: '9a1c1825-ea63-491b-adce-8cc791467fc5', title: 'PATENT_TITLE_3894' },
            { id: '9daf1434-e9a5-4976-8b0c-3a67ddd4c777', title: 'PATENT_TITLE_6503' },
        ]}
    />
)

export default App