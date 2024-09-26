import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '7661282a-0c3e-41b9-8617-779df573e825', title: 'PATENT_TITLE_7225' },
                { id: 'd3bed801-43f3-498b-a26a-ef353c1c6ba5', title: 'PATENT_TITLE_8154' },
                { id: '4cbf98f4-863e-450a-9f67-ece99f526694', title: 'PATENT_TITLE_7804' },
                { id: 'd7014b62-469e-4942-823e-5f0af30a075f', title: 'PATENT_TITLE_9326' },
                { id: '3bca13f5-7417-4fb0-b4a5-cecdd3cdea22', title: 'PATENT_TITLE_9864' },
                { id: '420c2b7e-5618-4b46-a839-f6e8cc0bd51d', title: 'PATENT_TITLE_4446' },
            ]}
        />
    </Box>
)

export default App