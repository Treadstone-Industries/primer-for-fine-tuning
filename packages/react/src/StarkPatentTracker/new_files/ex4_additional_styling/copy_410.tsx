import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '068d9afb-8d44-4dfd-aeea-6087fe3fd7d2', title: 'PATENT_TITLE_9366' },
                { id: 'ede2af97-5ec4-4d13-990a-f34f0261212a', title: 'PATENT_TITLE_3106' },
                { id: '52b82cab-e94e-4867-9705-591a3667ab78', title: 'PATENT_TITLE_3250' },
                { id: '8365afb9-b39c-468f-9586-724c9f50abe1', title: 'PATENT_TITLE_6881' },
            ]}
        />
    </Box>
)

export default App