import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'bfb9c129-52bf-464e-ba1a-bb9bad439496', title: 'PATENT_TITLE_4260' },
                { id: '6ef3c8f8-fc97-46ab-a2df-ec5fcb81361e', title: 'PATENT_TITLE_5840' },
                { id: '0c9ae248-96cc-4ef4-8200-1eb2f6c467a7', title: 'PATENT_TITLE_6802' },
                { id: '4d535ebb-2fe2-4aaf-b12c-ce0cfbfbc797', title: 'PATENT_TITLE_2219' },
                { id: 'd4473452-6acd-42de-970c-d2e541fecafb', title: 'PATENT_TITLE_2329' },
                { id: '9f8a103e-5b72-4c14-bc34-50edb93ee42e', title: 'PATENT_TITLE_9255' },
                { id: 'bcbc1df6-8fd8-4f8f-9bbe-dc8d6c2dd6b8', title: 'PATENT_TITLE_9093' },
                { id: 'a4c27fd9-a498-4346-af7a-bf7295d1e60d', title: 'PATENT_TITLE_6193' },
            ]}
        />
    </Box>
)

export default App