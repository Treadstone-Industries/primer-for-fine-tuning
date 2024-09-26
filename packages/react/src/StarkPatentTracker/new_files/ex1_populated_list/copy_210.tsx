import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'c289e0ae-d250-48f7-ab23-82c756e84cf5', title: 'PATENT_TITLE_8572' },
            { id: '91cdd5e2-8be2-4dbb-9b7b-b69f77e04d86', title: 'PATENT_TITLE_4635' },
            { id: '4fa6b2c9-5d2d-4e85-903c-63aef130e2c0', title: 'PATENT_TITLE_7620' },
            { id: 'a4f197ea-5f1d-4e21-bc69-60645752b926', title: 'PATENT_TITLE_7167' },
            { id: 'e97f66c5-1058-436f-946c-4bb316b084c9', title: 'PATENT_TITLE_4005' },
            { id: '2d9e8994-6723-47f4-936f-4b7c0e69226b', title: 'PATENT_TITLE_6054' },
            { id: 'f1a31c88-df6d-47a9-8b7e-f64b673424a5', title: 'PATENT_TITLE_5846' },
            { id: '62e4becd-534f-407c-96fa-41c2b0b98732', title: 'PATENT_TITLE_2868' },
            { id: '1ed1f799-0caa-4794-a185-a1077fb25917', title: 'PATENT_TITLE_1754' },
            { id: '3b6cbc3e-a713-462c-85d8-405a9c8088e6', title: 'PATENT_TITLE_2143' },
        ]}
    />
)

export default App