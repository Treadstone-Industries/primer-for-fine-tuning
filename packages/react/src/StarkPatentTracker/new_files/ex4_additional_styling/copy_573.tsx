import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a1f605bd-550e-4dae-b25c-545e0bec26e1', title: 'PATENT_TITLE_6545' },
                { id: '419cad08-1930-48f6-b39b-3b4cee5a00fc', title: 'PATENT_TITLE_7047' },
                { id: '5bc558dd-0c16-48bb-8e4d-f352411bca81', title: 'PATENT_TITLE_8221' },
                { id: '5eb7c3f5-6af8-4475-87b7-50250df6ce94', title: 'PATENT_TITLE_9729' },
                { id: '0857ee31-1044-4b01-8018-fb9c7b9f054c', title: 'PATENT_TITLE_4416' },
                { id: '5589ee31-4bcb-4c25-b5f7-db5fc2652cff', title: 'PATENT_TITLE_7647' },
                { id: '368aca8d-b0c3-450e-aa04-0bbaf5f26537', title: 'PATENT_TITLE_8350' },
                { id: 'dbe4d8d5-5bda-48ed-a011-ec21a1509e49', title: 'PATENT_TITLE_4455' },
                { id: 'be603050-1e11-4b80-bc6e-b220593bbd5a', title: 'PATENT_TITLE_2003' },
                { id: '751efd6f-1c44-4a64-a583-2c171095ecc7', title: 'PATENT_TITLE_1496' },
            ]}
        />
    </Box>
)

export default App