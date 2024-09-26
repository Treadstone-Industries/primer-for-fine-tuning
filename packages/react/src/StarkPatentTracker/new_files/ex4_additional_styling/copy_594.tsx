import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '7a0d1279-60ef-4f97-b70f-f246efe83a7a', title: 'PATENT_TITLE_3805' },
                { id: '38b0e249-f4f5-4739-a37c-fa1cf10a10f1', title: 'PATENT_TITLE_4769' },
                { id: 'cf881859-a4a9-4cb4-a92e-0c42376b6a17', title: 'PATENT_TITLE_6095' },
                { id: '4f14c89c-7d72-4af3-8bb4-4e1aba544f3e', title: 'PATENT_TITLE_3429' },
                { id: '91aebf5c-74e7-4cff-b07e-9ecc5f60c36d', title: 'PATENT_TITLE_9995' },
                { id: '3229e506-1835-405d-897d-fdce8691b6fc', title: 'PATENT_TITLE_7234' },
            ]}
        />
    </Box>
)

export default App