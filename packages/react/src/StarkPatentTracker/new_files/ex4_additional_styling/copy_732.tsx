import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8b429270-92f6-4f3b-b345-8fc62cd82120', title: 'PATENT_TITLE_7677' },
                { id: 'f4e49de5-b7fe-4373-bb51-258d7b2dd145', title: 'PATENT_TITLE_2969' },
                { id: '0ba64416-d276-49fd-a7ca-11028b97e968', title: 'PATENT_TITLE_4476' },
                { id: '3022483b-965e-435f-a543-073b8d5c083c', title: 'PATENT_TITLE_3423' },
                { id: '0e4b06a0-c31d-4690-b264-b58a06043ed1', title: 'PATENT_TITLE_4793' },
                { id: '7e85a1a7-0250-470e-81c5-eb0794af44d1', title: 'PATENT_TITLE_9216' },
                { id: '85da0ad5-a67d-48ef-bae0-a4a3a533967c', title: 'PATENT_TITLE_9359' },
                { id: 'bd0d9e60-63d5-4076-a1c3-29446006f001', title: 'PATENT_TITLE_2907' },
            ]}
        />
    </Box>
)

export default App