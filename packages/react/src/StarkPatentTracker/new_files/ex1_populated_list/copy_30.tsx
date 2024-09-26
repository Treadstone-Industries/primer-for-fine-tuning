import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '956bcda6-276f-4624-8680-893b752b4a9e', title: 'PATENT_TITLE_2216' },
            { id: '1262b858-7689-4261-a8dc-fe86bb493d8a', title: 'PATENT_TITLE_7451' },
            { id: '48a2d740-8318-4704-8bc2-6e5e7f9a5c58', title: 'PATENT_TITLE_7730' },
            { id: '0129347c-ad3d-4b97-9ed9-3fe08b72145b', title: 'PATENT_TITLE_9269' },
            { id: '2092ada5-07d5-4c8f-85fe-80f932f1c129', title: 'PATENT_TITLE_2573' },
            { id: 'f80a23e7-05fd-427e-a64f-d0254f163880', title: 'PATENT_TITLE_5350' },
            { id: 'b3552893-c6c7-4b3e-9bb7-bac419c2bbe6', title: 'PATENT_TITLE_6550' },
            { id: '2eae42b1-230e-4005-8db8-bcc85efed46d', title: 'PATENT_TITLE_6159' },
        ]}
    />
)

export default App