import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '82a4d51e-3a68-4333-849f-0e287d318521', title: 'PATENT_TITLE_1994' },
                { id: '4e4eb789-1b8d-4fe5-a5ae-9d09e42b8bd4', title: 'PATENT_TITLE_6271' },
                { id: '4e677e3c-07cc-4c60-8782-0aa472d7b2d2', title: 'PATENT_TITLE_2391' },
                { id: '68d9ae29-0cd0-4eeb-9652-c8fc2fbb9e36', title: 'PATENT_TITLE_2370' },
                { id: '61577950-fdbd-458f-ac35-981afff0b5e4', title: 'PATENT_TITLE_3236' },
                { id: 'a8f843fc-9915-47b9-a237-f815af5b6616', title: 'PATENT_TITLE_5467' },
                { id: '78042be1-8499-4140-9f91-5cf41ce56972', title: 'PATENT_TITLE_1734' },
                { id: 'cda9969c-4ccf-4b11-8159-b745c5fe7242', title: 'PATENT_TITLE_5285' },
            ]}
        />
    </Box>
)

export default App