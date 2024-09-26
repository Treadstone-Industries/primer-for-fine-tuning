import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'c6932269-ffc1-45fc-87aa-8ca1bed339dc', title: 'PATENT_TITLE_8666' },
                { id: '1eb6ca4a-e9dd-410d-9d7d-43bb08fce242', title: 'PATENT_TITLE_2169' },
                { id: '96544390-e7e7-4f2b-9aa2-7e1524661abd', title: 'PATENT_TITLE_6479' },
                { id: 'f4a00e90-1761-455c-816f-cca6d9414d9d', title: 'PATENT_TITLE_8164' },
                { id: 'de5b60f2-930c-4b89-96d8-9503094b2c55', title: 'PATENT_TITLE_6520' },
                { id: '50fb8952-1086-4bb9-b547-43c95f2982a4', title: 'PATENT_TITLE_9356' },
                { id: '2919b956-b155-428f-9822-b37ece7f68b7', title: 'PATENT_TITLE_5937' },
                { id: 'b77755be-b408-435a-9c70-4fcc9801cf11', title: 'PATENT_TITLE_4932' },
                { id: 'a18ca0fd-3759-40ba-8134-e8cf61300eb9', title: 'PATENT_TITLE_6742' },
                { id: 'ccb7807d-cdec-48c6-8354-ff548a5bd359', title: 'PATENT_TITLE_1814' },
            ]}
        />
    </Box>
)

export default App