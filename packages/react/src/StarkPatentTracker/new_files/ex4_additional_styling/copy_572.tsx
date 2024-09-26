import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'cb749ddb-d7e0-4bc3-910e-e48d5f010430', title: 'PATENT_TITLE_8081' },
                { id: '61989c62-5fc3-468e-896f-ed7b4ae4ccf4', title: 'PATENT_TITLE_7155' },
                { id: 'd29525bc-6584-460e-b921-59e254fa2c0d', title: 'PATENT_TITLE_8225' },
            ]}
        />
    </Box>
)

export default App