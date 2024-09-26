import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a6afe832-44e1-46f8-a810-18026acbb32b', title: 'PATENT_TITLE_3014' },
                { id: '498df60b-e54f-47f2-8381-88b0d223bd23', title: 'PATENT_TITLE_6084' },
                { id: 'd0cd88bf-140d-4c55-83a3-659e69f3bd3b', title: 'PATENT_TITLE_9521' },
                { id: '86fd7301-7063-47c6-986e-ea0a827a26e7', title: 'PATENT_TITLE_1828' },
                { id: 'fe4da3ae-1ec4-45e3-8bb5-51fdeb22c82c', title: 'PATENT_TITLE_2939' },
                { id: 'c0824e7f-b348-4565-95a1-7522b22c6e2b', title: 'PATENT_TITLE_3547' },
                { id: '9704cc66-fbbe-453b-88d4-3b3dee449b6e', title: 'PATENT_TITLE_5531' },
            ]}
        />
    </Box>
)

export default App