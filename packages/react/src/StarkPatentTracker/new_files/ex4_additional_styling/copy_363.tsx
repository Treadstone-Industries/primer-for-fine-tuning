import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'b72c690a-9013-45b2-949e-59e19d600f9e', title: 'PATENT_TITLE_7599' },
                { id: 'afdf9e7b-adc1-41ac-8d47-db33db27c2fa', title: 'PATENT_TITLE_9170' },
                { id: 'cf621c11-a1e2-42c5-9e2b-782fa07ab97d', title: 'PATENT_TITLE_1414' },
                { id: 'c04e4a97-a44a-4d90-813e-c302e0688efe', title: 'PATENT_TITLE_8748' },
                { id: '3e376ec6-a2a7-4b36-b40b-aa10b1b22715', title: 'PATENT_TITLE_8858' },
                { id: '7d4998d5-8c1d-4a29-aab1-72b770eaff33', title: 'PATENT_TITLE_8625' },
                { id: '32a5f01f-f19c-4da9-be9d-ff2c9029cb5a', title: 'PATENT_TITLE_4102' },
            ]}
        />
    </Box>
)

export default App