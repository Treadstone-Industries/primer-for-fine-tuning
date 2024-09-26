import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'afb41184-3464-431e-8a54-54c5fd04f2f4', title: 'PATENT_TITLE_4092' },
                { id: '1256505a-f5bb-4add-864b-223c7f14816d', title: 'PATENT_TITLE_2213' },
                { id: '6bcc0ef7-1770-493c-b6d7-37fe022c0d74', title: 'PATENT_TITLE_1291' },
            ]}
        />
    </Box>
)

export default App