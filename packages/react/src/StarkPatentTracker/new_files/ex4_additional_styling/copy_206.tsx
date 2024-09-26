import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '5be10ccf-afcd-41aa-afbc-06f799ded582', title: 'PATENT_TITLE_4536' },
                { id: '623956b0-e729-43f6-bfff-8ddb1f9c6470', title: 'PATENT_TITLE_7671' },
                { id: '479c1556-e150-4d39-bc0f-a778242fb605', title: 'PATENT_TITLE_5257' },
            ]}
        />
    </Box>
)

export default App