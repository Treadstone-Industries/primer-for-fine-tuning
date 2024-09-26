import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '5c95e628-cf96-4885-9f37-25f6e53a4212', title: 'PATENT_TITLE_9562' },
                { id: '03ff43e5-15eb-4ec5-808a-9ef6eaed4e0c', title: 'PATENT_TITLE_8169' },
                { id: '85161b0e-d03a-405b-9799-5019abbfb092', title: 'PATENT_TITLE_8165' },
                { id: 'b6d5331c-192e-4b3d-8930-79a74a38acc7', title: 'PATENT_TITLE_6359' },
                { id: '90b6eab5-1e2a-4a2c-84fb-7c1e3367d50b', title: 'PATENT_TITLE_5012' },
                { id: 'caf86982-fa48-4cf7-accd-ab1284b25a7a', title: 'PATENT_TITLE_3464' },
            ]}
        />
    </Box>
)

export default App