import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'c709eca0-92dd-4e9e-a000-9defa4be8c3f', title: 'PATENT_TITLE_2474' },
                { id: '6961ca51-c607-4c70-8ba4-3fda32fe1128', title: 'PATENT_TITLE_9450' },
                { id: '22bfb654-5e7d-460a-96d3-3b0ff8194128', title: 'PATENT_TITLE_5170' },
                { id: 'd3f70fca-352a-453d-9908-6ba0222e322b', title: 'PATENT_TITLE_5147' },
            ]}
        />
    </Box>
)

export default App