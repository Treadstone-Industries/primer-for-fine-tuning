import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'fa13a628-8438-4515-b555-472bff347b7e', title: 'PATENT_TITLE_6860' },
                { id: 'e4206c32-e230-4e9b-b4d7-54f0fa7b5e41', title: 'PATENT_TITLE_5534' },
                { id: 'b96c50fe-bf6f-4c85-bfcc-d5eafbabc26c', title: 'PATENT_TITLE_8425' },
                { id: '19879523-848b-4bbc-8df0-47c36cb1d433', title: 'PATENT_TITLE_2402' },
                { id: '94e41ba4-d426-4db6-9848-65cc3d649627', title: 'PATENT_TITLE_7607' },
            ]}
        />
    </Box>
)

export default App