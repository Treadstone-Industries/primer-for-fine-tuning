import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '3d5e288b-de3b-4bbb-ade9-241188d59a2b', title: 'PATENT_TITLE_4624' },
                { id: 'a1919dcc-dac7-46b4-95f8-c49881f9ac81', title: 'PATENT_TITLE_2861' },
                { id: '45207d9b-c129-449e-89ce-7a1e650dcebc', title: 'PATENT_TITLE_3636' },
                { id: '45dd006f-8c2e-4a0c-a7ae-c141162ede43', title: 'PATENT_TITLE_2654' },
                { id: '0c9b1cbd-386c-4234-b1c3-b89ef8796042', title: 'PATENT_TITLE_6533' },
                { id: '6bbb8b0f-6fca-4ee2-b5a9-94ecca694e14', title: 'PATENT_TITLE_9270' },
            ]}
        />
    </Box>
)

export default App