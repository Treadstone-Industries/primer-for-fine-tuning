import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'af1ab2ef-cace-4725-9013-70a84889baf9', title: 'PATENT_TITLE_8871' },
                { id: 'bbc44c58-b54b-4881-98b9-a4d7db356b29', title: 'PATENT_TITLE_7001' },
                { id: '6da47811-6904-4000-b999-f76ad21b73be', title: 'PATENT_TITLE_3610' },
                { id: 'c198d081-a665-446c-8148-c6f64f4af818', title: 'PATENT_TITLE_9899' },
            ]}
        />
    </Box>
)

export default App