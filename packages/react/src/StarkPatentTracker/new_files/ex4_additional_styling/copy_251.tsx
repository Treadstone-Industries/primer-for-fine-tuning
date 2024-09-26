import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '4a134eb4-5d95-4059-b818-d46a5376e3ba', title: 'PATENT_TITLE_7970' },
                { id: '5939a324-6b83-4a03-ab80-5fa0428fb051', title: 'PATENT_TITLE_7040' },
                { id: '9ec1abff-542f-4925-9121-db9a79f8bec8', title: 'PATENT_TITLE_1556' },
                { id: '94256af4-9aee-4e19-9a48-0804e7091150', title: 'PATENT_TITLE_8030' },
                { id: 'f00966e6-2bec-4a24-9070-acbdc958c21b', title: 'PATENT_TITLE_5374' },
                { id: 'b3e26357-ac8f-4f38-8372-06224e088fd1', title: 'PATENT_TITLE_2724' },
                { id: 'b54e84ba-f691-46df-ad77-0fd22c6cb762', title: 'PATENT_TITLE_8398' },
                { id: 'bb83afab-6eb8-4c3f-951c-790fe960ac79', title: 'PATENT_TITLE_1327' },
            ]}
        />
    </Box>
)

export default App