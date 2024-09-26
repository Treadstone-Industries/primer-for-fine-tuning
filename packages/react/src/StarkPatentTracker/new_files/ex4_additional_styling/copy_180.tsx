import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'b12b8d82-b5bb-44e5-9d1c-98c21a990286', title: 'PATENT_TITLE_3379' },
                { id: '555ecc01-e6ae-4ffb-b328-30b95db36833', title: 'PATENT_TITLE_5481' },
                { id: '844700de-4a40-42ba-a283-97292e40c745', title: 'PATENT_TITLE_7236' },
                { id: '7fb595aa-421c-4f7c-93cf-2c5637dbd802', title: 'PATENT_TITLE_7982' },
                { id: '9c88d4b8-1bfa-4f83-acb5-dc1b5c55542e', title: 'PATENT_TITLE_5434' },
                { id: 'f0e2a926-20ad-49c2-b1ba-c986ff257a18', title: 'PATENT_TITLE_4059' },
                { id: '3f596b77-d3d4-4014-bcf6-40c7f6aa526a', title: 'PATENT_TITLE_6185' },
                { id: '3f0f60b1-e417-491c-a2d8-c9eda9313b35', title: 'PATENT_TITLE_6646' },
                { id: '33b294fe-ed5f-4add-a737-471a2b42856b', title: 'PATENT_TITLE_3331' },
            ]}
        />
    </Box>
)

export default App