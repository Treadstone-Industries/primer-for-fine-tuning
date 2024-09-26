import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '04241170-af9f-4b5c-b5eb-bd8f28348945', title: 'PATENT_TITLE_2420' },
                { id: '9aa3fac9-e034-46fb-9ea3-c5d9be12331c', title: 'PATENT_TITLE_7316' },
                { id: 'd7130fee-722f-47ee-8042-503283c98a64', title: 'PATENT_TITLE_6768' },
                { id: '553f5918-92ab-4561-8b31-41a88ebe0cdc', title: 'PATENT_TITLE_8715' },
            ]}
        />
    </Box>
)

export default App