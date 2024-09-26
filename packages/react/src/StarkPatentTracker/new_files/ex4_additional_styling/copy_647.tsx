import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '4dffa687-5982-4abc-abf5-82ef6c4c78c3', title: 'PATENT_TITLE_1787' },
                { id: 'b6033a9b-7e4d-40be-9bc3-74b80736d3a6', title: 'PATENT_TITLE_9869' },
                { id: 'bb87d6de-1c76-4dc5-af94-9aabe9e735d0', title: 'PATENT_TITLE_7704' },
                { id: '17d36d21-a9f1-44f6-a975-d92ab4e89511', title: 'PATENT_TITLE_1545' },
                { id: '7030615c-ecd1-488f-9c05-b68df5629753', title: 'PATENT_TITLE_2887' },
                { id: 'f65bd9b3-8bf7-4fa3-9bf0-060f3f630b9f', title: 'PATENT_TITLE_4354' },
                { id: '58dd23ea-8f02-403c-8108-3adc38756a41', title: 'PATENT_TITLE_3967' },
            ]}
        />
    </Box>
)

export default App