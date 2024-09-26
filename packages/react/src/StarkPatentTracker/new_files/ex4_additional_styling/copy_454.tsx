import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '2cc885d8-c038-4ddd-aa35-bc4e8f12962e', title: 'PATENT_TITLE_5854' },
                { id: '2a967d8e-0339-4d82-b318-0adfae050b28', title: 'PATENT_TITLE_1234' },
                { id: '2f110a16-d55e-4df8-8fc1-c1d2b5a427dd', title: 'PATENT_TITLE_9120' },
                { id: 'd99b8a74-9df0-456e-87e0-0fd40fd4589d', title: 'PATENT_TITLE_6907' },
                { id: '4232e11b-284e-4918-bd49-0abc688c3256', title: 'PATENT_TITLE_9704' },
                { id: 'a1bc3406-e1e2-4e38-bd4c-08e0e9562575', title: 'PATENT_TITLE_4271' },
                { id: '37faaf34-ef6f-41fa-87bd-695b1b5bdfb7', title: 'PATENT_TITLE_4477' },
                { id: '49549ecb-693d-41e8-acba-97507ba54e6d', title: 'PATENT_TITLE_2268' },
                { id: '088dcfd2-383a-4cfb-bdbf-0b6a1487f59e', title: 'PATENT_TITLE_8614' },
                { id: '5dee6f85-06bb-44e0-948d-894b816ecd26', title: 'PATENT_TITLE_4720' },
            ]}
        />
    </Box>
)

export default App