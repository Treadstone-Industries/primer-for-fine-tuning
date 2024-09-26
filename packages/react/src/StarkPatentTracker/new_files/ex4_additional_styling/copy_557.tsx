import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '7ae75343-69db-40d0-8675-f28203e499a1', title: 'PATENT_TITLE_8793' },
                { id: 'f77c6c14-7228-49eb-aac6-78c0faf34db5', title: 'PATENT_TITLE_7931' },
                { id: '8ef9fdb6-76d1-4505-b49f-8975f79ad56a', title: 'PATENT_TITLE_3038' },
                { id: '0ccc2744-dc93-4785-a43e-44d63832824c', title: 'PATENT_TITLE_4007' },
                { id: '9cf13d81-a155-46b3-8fe2-62cdf07a6770', title: 'PATENT_TITLE_6245' },
            ]}
        />
    </Box>
)

export default App