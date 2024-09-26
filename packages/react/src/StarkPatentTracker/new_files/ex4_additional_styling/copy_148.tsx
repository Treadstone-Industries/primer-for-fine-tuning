import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '9beac000-96ec-4b41-a68e-97e43c96d89b', title: 'PATENT_TITLE_8765' },
                { id: 'e7197e38-5e06-4caf-8881-4fc575ba1799', title: 'PATENT_TITLE_3498' },
            ]}
        />
    </Box>
)

export default App