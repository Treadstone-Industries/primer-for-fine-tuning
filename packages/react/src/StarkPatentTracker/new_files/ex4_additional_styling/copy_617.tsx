import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'd5fc289d-84cd-484d-9624-7f4346ab828d', title: 'PATENT_TITLE_7500' },
                { id: 'e358d1cb-09c5-40a5-b982-43c01c757914', title: 'PATENT_TITLE_9297' },
            ]}
        />
    </Box>
)

export default App