import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '917f27d8-1ee1-451b-8adf-56e00de89a79', title: 'PATENT_TITLE_7145' },
                { id: 'c6a0677b-0073-4614-9762-aa1888526048', title: 'PATENT_TITLE_5979' },
                { id: '21564b32-9976-4ae7-8c3d-0e6cb46a3a33', title: 'PATENT_TITLE_5879' },
                { id: 'bbaaeea9-8bd9-4ccd-ba94-b8fd94e1e94f', title: 'PATENT_TITLE_4918' },
                { id: '75203679-6698-4200-bcd4-aa1be18121dc', title: 'PATENT_TITLE_2917' },
                { id: '86376b79-042d-4036-86a6-88597f9e08f2', title: 'PATENT_TITLE_5749' },
                { id: '16f68e34-e9d6-4bba-9b31-0188ffafa7c5', title: 'PATENT_TITLE_8197' },
                { id: '71338d54-8c1c-4159-9ee3-2edf067b2cbe', title: 'PATENT_TITLE_1265' },
            ]}
        />
    </Box>
)

export default App