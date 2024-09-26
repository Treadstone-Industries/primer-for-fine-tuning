import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a401ee0b-f834-4b29-abd8-ffad2bc284f1', title: 'PATENT_TITLE_5227' },
                { id: '5b53a219-51a3-4a4d-974f-88e81ef21555', title: 'PATENT_TITLE_1996' },
                { id: '852f2cdd-800a-4960-b60c-e927fb229498', title: 'PATENT_TITLE_2438' },
                { id: '4d043a66-8db5-4de5-8a59-1a285a52107c', title: 'PATENT_TITLE_4489' },
                { id: '1b4540a5-4526-4fbd-9177-b86d243c0aa1', title: 'PATENT_TITLE_5484' },
                { id: '4fb26114-1838-4319-8d1c-cb18c391778e', title: 'PATENT_TITLE_6567' },
                { id: 'c9f0c077-72b9-4ef9-bbb2-187ce28b7c24', title: 'PATENT_TITLE_9113' },
                { id: 'fad1f792-aaac-4532-871c-10fd486a0cf8', title: 'PATENT_TITLE_2280' },
            ]}
        />
    </Box>
)

export default App