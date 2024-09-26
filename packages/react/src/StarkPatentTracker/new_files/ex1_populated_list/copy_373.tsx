import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a0eab4d5-b1b5-41ae-8025-a14a00451117', title: 'PATENT_TITLE_4438' },
            { id: '8a23fb4e-e8a4-407a-bf9c-83e5fbae43a7', title: 'PATENT_TITLE_4571' },
            { id: '0f5c7499-cf97-406d-a703-75703cb17a9a', title: 'PATENT_TITLE_1910' },
            { id: '5b4ce15b-287a-4a45-83b2-2e908736d049', title: 'PATENT_TITLE_5842' },
            { id: 'e846e33d-debe-4920-ad04-cba1c56e0c45', title: 'PATENT_TITLE_8897' },
            { id: '190608c8-5ba0-447c-a928-4530c3936a8c', title: 'PATENT_TITLE_2443' },
            { id: 'ff5e8f39-1f66-4345-bcc0-b4a3ff14c3c9', title: 'PATENT_TITLE_9798' },
            { id: '4c26e7b8-4cf9-4f5b-82fb-d85d5de5f1f1', title: 'PATENT_TITLE_6765' },
            { id: 'd53ddec9-87ea-45c7-bed2-4c657bfe7ec7', title: 'PATENT_TITLE_5990' },
            { id: 'bd9b13a2-b876-4d29-832f-3e6438a309ab', title: 'PATENT_TITLE_6442' },
        ]}
    />
)

export default App