import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '761e285d-c07d-47bf-98e6-a76e9606de8d', title: 'PATENT_TITLE_7724' },
                { id: '1c4c3818-8452-46aa-b38c-c8e994f50268', title: 'PATENT_TITLE_5000' },
                { id: '30baf9ba-051c-4232-96e2-1202bc832654', title: 'PATENT_TITLE_4903' },
            ]}
        />
    </Box>
)

export default App