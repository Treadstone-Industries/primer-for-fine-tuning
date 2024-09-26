import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'f6894275-f396-4661-b3b0-411031e774a4', title: 'PATENT_TITLE_2822' },
                { id: '2a745ecf-b9e1-4517-8b18-5d10e12fe7bf', title: 'PATENT_TITLE_2984' },
                { id: 'e7826b6e-ec9e-4972-87f7-63ebca77b7cf', title: 'PATENT_TITLE_3260' },
                { id: '79c8208a-12aa-4dfc-98fc-9033b7a67dc9', title: 'PATENT_TITLE_7424' },
                { id: 'e8d7e7e3-8e2f-4347-8ac3-a5f35f7327cb', title: 'PATENT_TITLE_5216' },
                { id: '1a4335b9-59de-46a1-8bb3-f86323dfc2e1', title: 'PATENT_TITLE_2496' },
                { id: 'c779e74c-74f5-4091-8fe8-7542c37df59f', title: 'PATENT_TITLE_9445' },
                { id: '9f84675e-adbb-42f9-b007-3eaa8e62cb97', title: 'PATENT_TITLE_1631' },
                { id: '0330389b-37df-4f70-9455-f1882f373a76', title: 'PATENT_TITLE_9610' },
                { id: 'e77ecb5a-0f1d-432a-8728-bc0cb8c1efb3', title: 'PATENT_TITLE_4421' },
            ]}
        />
    </Box>
)

export default App