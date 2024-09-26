import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '1d2cfd5b-2f27-4208-a59c-3f3ed3d7063f', title: 'PATENT_TITLE_3557' },
                { id: '18ced872-6ae9-4d1f-9ca7-dfb91d15e67d', title: 'PATENT_TITLE_3199' },
                { id: 'eadb1f16-dde2-432f-8e4c-0fb358ceb91d', title: 'PATENT_TITLE_1955' },
                { id: '68414a07-8f58-423e-8c37-8d676c30eff9', title: 'PATENT_TITLE_7867' },
            ]}
        />
    </Box>
)

export default App