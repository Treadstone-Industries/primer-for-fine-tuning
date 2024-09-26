import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '31c38107-5dde-4b28-8f2d-fe43e9056c1a', title: 'PATENT_TITLE_2681' },
                { id: '5e9bb9a1-b7a8-49f1-a670-f741f0ee59bb', title: 'PATENT_TITLE_9788' },
                { id: 'c8428218-0d67-43bc-be31-9072def7e3fe', title: 'PATENT_TITLE_4485' },
                { id: '4f9c7165-60ff-40c7-bb06-b47d4bf65013', title: 'PATENT_TITLE_5034' },
                { id: '63883c71-ffa7-4814-96cf-8ce927601246', title: 'PATENT_TITLE_3484' },
            ]}
        />
    </Box>
)

export default App