import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '5ab083e6-5f50-4b71-9777-f61176929699', title: 'PATENT_TITLE_6947' },
                { id: 'b59320a3-18a7-4035-bd37-99924e9a9e30', title: 'PATENT_TITLE_9101' },
                { id: '4641f18e-c49d-4c92-8ddb-959eb18d1f9d', title: 'PATENT_TITLE_4103' },
            ]}
        />
    </Box>
)

export default App