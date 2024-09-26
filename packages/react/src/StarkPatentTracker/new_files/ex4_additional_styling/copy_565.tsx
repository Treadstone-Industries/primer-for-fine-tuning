import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '733f83ea-9bfb-435a-afd0-b0c27a66c37d', title: 'PATENT_TITLE_6916' },
                { id: '573d5fb0-ea54-41ed-9a79-f7329f3b9550', title: 'PATENT_TITLE_2769' },
                { id: 'd0e7d550-2a28-4ddf-81b8-664eaa9c5676', title: 'PATENT_TITLE_3149' },
                { id: '2576bac1-5078-400d-a7ee-a9ef136fe06a', title: 'PATENT_TITLE_7926' },
                { id: 'dc7156d6-aab7-4a24-b459-61d24e9204f2', title: 'PATENT_TITLE_9197' },
            ]}
        />
    </Box>
)

export default App