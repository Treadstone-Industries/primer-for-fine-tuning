import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e27fdf77-c8e9-42f3-8f81-5230380f0324', title: 'PATENT_TITLE_5652' },
                { id: '2e9f9175-f58b-4407-8734-9702fda6ae3d', title: 'PATENT_TITLE_3011' },
                { id: '521011ee-91fb-4cbf-bd8f-d51aaa00b486', title: 'PATENT_TITLE_4830' },
            ]}
        />
    </Box>
)

export default App