import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '7cddd8c1-309d-4f48-862a-909e3b8ab382', title: 'PATENT_TITLE_4063' },
                { id: '3afeeb1d-2cd2-430b-ab02-f0de7ddd8e7d', title: 'PATENT_TITLE_8126' },
                { id: 'f9632dba-108f-4fb1-b85d-74bab3f233b9', title: 'PATENT_TITLE_3964' },
                { id: 'ba4d74a3-16a6-47a0-b0e6-e4c360a6b212', title: 'PATENT_TITLE_2313' },
                { id: '2adc4f1c-998f-46bb-a827-fb3a72e84f36', title: 'PATENT_TITLE_1655' },
                { id: '2a00eda5-ca1f-4830-adc8-d9a72f58691e', title: 'PATENT_TITLE_9889' },
                { id: '950dca1e-bcce-4c69-ac0f-2dfaa1c5ea90', title: 'PATENT_TITLE_6545' },
                { id: '4e6b0e39-972a-426b-b4b6-f094a6bc94be', title: 'PATENT_TITLE_5572' },
                { id: 'c4f6c33a-9550-42fe-8c37-2ef58e0931ee', title: 'PATENT_TITLE_3439' },
                { id: '20c436a1-87d8-4aa0-8ca4-547c23ad39e2', title: 'PATENT_TITLE_6913' },
            ]}
        />
    </Box>
)

export default App