import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'cff15cdd-220b-4a85-8800-c3737434a7c8', title: 'PATENT_TITLE_4434' },
                { id: 'c87cb909-3979-438c-b7cc-db7d51a898e3', title: 'PATENT_TITLE_8529' },
                { id: '292bf420-2578-431a-a47c-92fedbfdc9ff', title: 'PATENT_TITLE_2030' },
                { id: '3772cf12-10da-49ee-95bc-3b672c1f12bc', title: 'PATENT_TITLE_8728' },
                { id: '20f95d9a-ad4e-4ae1-a515-af1ca9fd54dd', title: 'PATENT_TITLE_3628' },
                { id: '06ea361c-6e43-4a1d-9106-25fca914c8d3', title: 'PATENT_TITLE_4373' },
                { id: '00ec0241-570b-47c6-90de-da263ac9079d', title: 'PATENT_TITLE_4299' },
                { id: '986c797b-5660-48ce-aa0c-9d507497f796', title: 'PATENT_TITLE_6430' },
                { id: 'c4fc8fc0-b3c0-4a00-8f80-7e3f32091072', title: 'PATENT_TITLE_5869' },
                { id: 'ff4b1ac9-2581-428b-a2d7-49fd5d8f88e9', title: 'PATENT_TITLE_5916' },
            ]}
        />
    </Box>
)

export default App