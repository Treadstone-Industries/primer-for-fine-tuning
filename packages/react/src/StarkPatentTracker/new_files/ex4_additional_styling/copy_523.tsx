import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '36b3951d-d201-49cf-8482-a2bf2a40d9ce', title: 'PATENT_TITLE_8280' },
                { id: '40b4fd13-a841-45bc-be14-7546e41bee6d', title: 'PATENT_TITLE_4494' },
                { id: '070003c0-9e07-4f94-abe7-4b5bfa173ba4', title: 'PATENT_TITLE_2148' },
            ]}
        />
    </Box>
)

export default App