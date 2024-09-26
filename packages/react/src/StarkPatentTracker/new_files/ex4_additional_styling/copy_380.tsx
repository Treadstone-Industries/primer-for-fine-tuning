import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a073a754-40f7-4154-93a1-765a6921c3ce', title: 'PATENT_TITLE_8959' },
                { id: 'ef93cca6-179a-4c98-8ff6-962339066923', title: 'PATENT_TITLE_9702' },
                { id: 'b4ebdd76-8f2a-4cec-98e9-09d8f4c2645f', title: 'PATENT_TITLE_6277' },
                { id: 'fa848a09-84a9-477e-9ba3-7251b054ebff', title: 'PATENT_TITLE_1771' },
            ]}
        />
    </Box>
)

export default App