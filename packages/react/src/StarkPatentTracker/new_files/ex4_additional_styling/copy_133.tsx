import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '9dd42eda-262b-4362-b7d8-33309d2b40f8', title: 'PATENT_TITLE_3775' },
                { id: 'e6a71fac-3441-419c-9923-1c77f23daa67', title: 'PATENT_TITLE_7231' },
            ]}
        />
    </Box>
)

export default App