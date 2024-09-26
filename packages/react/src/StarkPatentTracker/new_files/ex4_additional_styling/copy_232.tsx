import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '9bbbdde9-9baa-4586-8872-c5136bad5997', title: 'PATENT_TITLE_4566' },
                { id: '4fc41c44-e41b-43db-9941-2fe442d5f104', title: 'PATENT_TITLE_1409' },
                { id: 'ced827b7-d153-4393-8065-ae8e357c927a', title: 'PATENT_TITLE_1286' },
                { id: 'ee4e06eb-f28a-4503-a30c-c3b1093dce91', title: 'PATENT_TITLE_1496' },
                { id: '311d8334-3e28-411b-b702-cd13d6a08ccb', title: 'PATENT_TITLE_8059' },
                { id: '91597322-e1e9-45f8-a2c1-a15f46fec768', title: 'PATENT_TITLE_7102' },
                { id: 'a65a5f73-015e-474a-ade6-f666db87d547', title: 'PATENT_TITLE_1124' },
            ]}
        />
    </Box>
)

export default App