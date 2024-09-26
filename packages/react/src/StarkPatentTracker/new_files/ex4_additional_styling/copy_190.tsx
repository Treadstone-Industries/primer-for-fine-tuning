import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'b152c193-ea06-4b01-84b0-cb8cafd3301c', title: 'PATENT_TITLE_4842' },
                { id: 'c605816a-05f0-4e8e-92d0-b118e6191cbe', title: 'PATENT_TITLE_3825' },
                { id: 'ba6a51d9-0225-48f1-93fa-eb064981ad93', title: 'PATENT_TITLE_3280' },
                { id: '004c56e1-2d28-4456-9a11-0d14bffa5b87', title: 'PATENT_TITLE_6498' },
                { id: '3c30de9a-9770-41b4-92e6-525ac2dc6c3f', title: 'PATENT_TITLE_1744' },
                { id: 'e11774e4-f22e-47f2-9621-3d4623cf272c', title: 'PATENT_TITLE_9277' },
                { id: '8d897080-e689-4bb9-a2f8-3ecf33c2d0c8', title: 'PATENT_TITLE_8700' },
                { id: '8006b892-eaa9-48fb-9d02-162dd2d92193', title: 'PATENT_TITLE_4662' },
                { id: 'af2876c9-b8c4-42a5-8deb-d9ad7cc63fa2', title: 'PATENT_TITLE_1784' },
            ]}
        />
    </Box>
)

export default App