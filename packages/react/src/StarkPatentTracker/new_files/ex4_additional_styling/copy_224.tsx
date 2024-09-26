import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '02b30988-5741-482b-a384-e701c8c93d63', title: 'PATENT_TITLE_9919' },
                { id: '35db020c-6416-4b72-a97f-4dd4d1f9f131', title: 'PATENT_TITLE_1391' },
                { id: 'c60e2b78-1c32-4633-89c0-47e623404bcb', title: 'PATENT_TITLE_8452' },
                { id: '8d5cd00d-a031-4df1-9013-7ba493a04b04', title: 'PATENT_TITLE_2292' },
                { id: '4b76e18c-1977-41d8-8787-9d49370675c6', title: 'PATENT_TITLE_9722' },
                { id: 'ca1a480d-5def-426f-b6ff-171e86e5bf4b', title: 'PATENT_TITLE_6372' },
            ]}
        />
    </Box>
)

export default App