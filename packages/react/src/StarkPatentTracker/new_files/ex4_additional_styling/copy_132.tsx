import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '6069e8d2-671b-47a9-ad2d-5d0b5601b9f1', title: 'PATENT_TITLE_8956' },
                { id: 'f8818c6f-60de-45e2-8991-bb39dff80b9e', title: 'PATENT_TITLE_4779' },
                { id: 'b813a646-4aab-4850-8edc-4d9fe48742b0', title: 'PATENT_TITLE_8161' },
                { id: 'f25cf7f9-d00b-4157-bce9-79dd23f58ce5', title: 'PATENT_TITLE_4019' },
                { id: '5e4e54f8-539c-4c5b-8a96-11fd31833cc6', title: 'PATENT_TITLE_7101' },
                { id: 'fbd473e3-e788-40ec-bb11-3389d76c6caf', title: 'PATENT_TITLE_2512' },
                { id: '3c8dbe98-82f1-4331-a140-5ba14b95522b', title: 'PATENT_TITLE_9816' },
                { id: '49999189-5ca1-47b6-a7fd-065a72053b2d', title: 'PATENT_TITLE_3124' },
                { id: '1a7a420f-e8ad-4288-9042-ec517ce56ab7', title: 'PATENT_TITLE_4504' },
            ]}
        />
    </Box>
)

export default App