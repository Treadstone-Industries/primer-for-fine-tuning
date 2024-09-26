import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '92a8bf2e-137c-4eb7-a4d3-c483f570f9db', title: 'PATENT_TITLE_7962' },
                { id: '183af15f-336a-4037-a876-2c392f38de98', title: 'PATENT_TITLE_3501' },
                { id: '4e8487c2-874f-48f9-b8d2-3b86806a0af2', title: 'PATENT_TITLE_6574' },
                { id: '95ed399e-105f-4160-bb31-6b696bc2c419', title: 'PATENT_TITLE_3650' },
                { id: 'a7d6ef42-d16c-479c-8722-397213a60568', title: 'PATENT_TITLE_3129' },
            ]}
        />
    </Box>
)

export default App