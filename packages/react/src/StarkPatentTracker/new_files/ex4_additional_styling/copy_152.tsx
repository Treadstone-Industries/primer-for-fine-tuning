import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e642e31e-78a1-444a-8e5e-8f42f3366839', title: 'PATENT_TITLE_1684' },
                { id: 'adfef58f-8294-45c1-a047-3ebf45bce2c9', title: 'PATENT_TITLE_2852' },
                { id: '02f4855f-e22b-4c1b-9bfa-69135978c13c', title: 'PATENT_TITLE_9026' },
                { id: '3cf7c7f1-4e94-4dba-91b5-0765b50634b0', title: 'PATENT_TITLE_6895' },
            ]}
        />
    </Box>
)

export default App