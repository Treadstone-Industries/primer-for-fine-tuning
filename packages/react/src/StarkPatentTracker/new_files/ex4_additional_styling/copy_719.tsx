import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'f5249ef6-dc66-45ff-8189-dc3fdba4416b', title: 'PATENT_TITLE_5890' },
                { id: '9dddfa96-0d7f-4b22-a2a9-91a8ebd267be', title: 'PATENT_TITLE_3251' },
                { id: '4e63dcd4-ecfa-4c4c-8946-9e70b098444c', title: 'PATENT_TITLE_6705' },
                { id: '963693b7-2cdb-4476-a700-0aaacae85dcf', title: 'PATENT_TITLE_5602' },
                { id: '169eaf0b-6413-43c6-b623-a2e57d0dfb9c', title: 'PATENT_TITLE_5836' },
                { id: '0233aace-e00f-497e-b8b4-57f6ed896382', title: 'PATENT_TITLE_8220' },
                { id: '591c8ac6-0050-48b7-bbd1-4df586207d81', title: 'PATENT_TITLE_4835' },
            ]}
        />
    </Box>
)

export default App