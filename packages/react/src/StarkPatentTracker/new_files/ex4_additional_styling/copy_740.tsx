import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'cffeef34-65ed-429f-9958-8a4e0c23cb34', title: 'PATENT_TITLE_3689' },
                { id: 'd6e5b977-7188-498b-b296-905508d4fd13', title: 'PATENT_TITLE_1574' },
                { id: '852feed9-e68c-4783-9e4b-a6fcb578b271', title: 'PATENT_TITLE_6474' },
            ]}
        />
    </Box>
)

export default App