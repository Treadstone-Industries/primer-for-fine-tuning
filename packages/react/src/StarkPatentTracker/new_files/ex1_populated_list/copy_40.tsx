import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '049e0bff-7923-483b-b2df-8d82064e1b8b', title: 'PATENT_TITLE_5628' },
            { id: '9ed66a10-59c6-4dd3-a030-0ec9431e2373', title: 'PATENT_TITLE_9502' },
            { id: '14f8ac2f-8224-4ef8-9282-8fbe5af812ab', title: 'PATENT_TITLE_8442' },
            { id: 'a4b9f60c-e926-4d92-bf73-495d6d3f5685', title: 'PATENT_TITLE_9085' },
            { id: '8173876b-f7cb-4b09-8d61-53d767e680ca', title: 'PATENT_TITLE_7015' },
            { id: '1be45252-3519-463e-8536-0b75a8c4d685', title: 'PATENT_TITLE_4217' },
            { id: '8ed375e9-ba3b-4f3f-89a2-82bb0f46709b', title: 'PATENT_TITLE_3063' },
            { id: 'f4ebaf12-9ff1-48b0-bad8-93df13b82869', title: 'PATENT_TITLE_6558' },
            { id: '50847cb7-e007-480f-9016-b2add239eb9b', title: 'PATENT_TITLE_7214' },
        ]}
    />
)

export default App