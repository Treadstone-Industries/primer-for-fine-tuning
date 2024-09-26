import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'f9afc8c8-7701-4e32-9635-968ea33069cc', title: 'PATENT_TITLE_7202' },
                { id: '8118e65d-c2e8-42c0-9d99-c11f33f36c80', title: 'PATENT_TITLE_1295' },
                { id: 'c1ba8040-df89-4bb7-bd77-4cc3ec8b619d', title: 'PATENT_TITLE_8340' },
                { id: '8162dedc-2cd8-46be-a4c9-feadd5a4279b', title: 'PATENT_TITLE_6137' },
                { id: '37250118-efbf-4dda-8299-d53c6d30d058', title: 'PATENT_TITLE_3742' },
            ]}
        />
    </Box>
)

export default App