import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'd4fa412e-9944-4cdf-bc5e-6b27c0a5daf8', title: 'PATENT_TITLE_5060' },
                { id: '738aadf4-4c7b-4774-a07e-e903298a56ae', title: 'PATENT_TITLE_1663' },
                { id: 'e19d9467-226f-4b27-9a91-a4d14d1c49bc', title: 'PATENT_TITLE_4007' },
                { id: '297a5ce0-95aa-4ac9-91e1-58ab801257b3', title: 'PATENT_TITLE_2233' },
                { id: 'e59f1a23-8fb4-4d47-93e8-ae3c93c5ed84', title: 'PATENT_TITLE_3215' },
            ]}
        />
    </Box>
)

export default App