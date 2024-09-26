import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '5606fd28-0cc0-4752-b916-0c34b06a2307', title: 'PATENT_TITLE_1756' },
                { id: 'bf0d19ef-8a77-4e04-8947-8feead1654de', title: 'PATENT_TITLE_7639' },
                { id: 'c76865cb-8750-4134-b924-2358f48c7db3', title: 'PATENT_TITLE_8084' },
                { id: '53cbd4d0-43c4-4f33-aa1b-0940c4b9e389', title: 'PATENT_TITLE_4161' },
                { id: '82c3949e-c8c9-45b7-8af3-319dfe25fc3d', title: 'PATENT_TITLE_8377' },
                { id: 'bdaa1e41-d844-4e2f-81c0-40d33aa329c1', title: 'PATENT_TITLE_6468' },
                { id: 'c19c1ca4-3cb9-4ee1-ad45-a4cdd3a8b697', title: 'PATENT_TITLE_6399' },
                { id: '6b3876ce-5705-43d5-8dba-0c01ee872bd8', title: 'PATENT_TITLE_5854' },
            ]}
        />
    </Box>
)

export default App