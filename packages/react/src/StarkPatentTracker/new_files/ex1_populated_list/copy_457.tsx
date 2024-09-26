import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a40e57de-e7be-45e4-b9df-380804fe005a', title: 'PATENT_TITLE_3943' },
            { id: '0d1c4c7c-4fcd-4c4d-b0ff-5b02961d6040', title: 'PATENT_TITLE_6481' },
            { id: '22ab4503-07ab-4a67-946a-086502b5fbc6', title: 'PATENT_TITLE_2621' },
            { id: '8e63fd8d-7ef8-417d-a271-55ed6b0b1321', title: 'PATENT_TITLE_3470' },
            { id: 'ceba3c04-6353-4458-947a-4f10df32e50c', title: 'PATENT_TITLE_7787' },
            { id: '56f6a5a8-530a-4b30-8022-4f69800c187f', title: 'PATENT_TITLE_3019' },
            { id: '1b97bf0e-1a75-4542-bfd4-c3270414f84b', title: 'PATENT_TITLE_8275' },
            { id: '7843e92d-e311-405f-b17b-970431107ada', title: 'PATENT_TITLE_5349' },
            { id: '2b7d4a57-4008-4e39-926e-10cd16fd6616', title: 'PATENT_TITLE_5763' },
            { id: 'ec80c5ab-ff01-4dea-8026-91c7742a4e84', title: 'PATENT_TITLE_4403' },
        ]}
    />
)

export default App