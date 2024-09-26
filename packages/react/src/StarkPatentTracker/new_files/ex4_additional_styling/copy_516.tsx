import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8b75526b-bb35-4f7e-88cc-be81bfb1b66b', title: 'PATENT_TITLE_6281' },
                { id: '49ac849e-a810-4264-a5e2-51a89b3a7654', title: 'PATENT_TITLE_9844' },
                { id: '1194d075-fcae-475a-8576-407db85cfeb2', title: 'PATENT_TITLE_3688' },
                { id: 'bdf5dfee-0d97-4f6a-a04b-521c6ff294b8', title: 'PATENT_TITLE_5600' },
                { id: '2c3b830e-df2f-4672-a8dc-932381903cbd', title: 'PATENT_TITLE_9038' },
                { id: 'abebf426-7c1f-42bd-af70-1df1849d0494', title: 'PATENT_TITLE_3198' },
                { id: 'b09ec96a-ee22-4a3d-b700-60a0971114c3', title: 'PATENT_TITLE_4294' },
                { id: '92cc7d44-7e21-474b-a2c5-1109508f96e9', title: 'PATENT_TITLE_9393' },
                { id: 'd2fecd27-fde2-482f-8c2a-e5d74c024fbb', title: 'PATENT_TITLE_6541' },
            ]}
        />
    </Box>
)

export default App