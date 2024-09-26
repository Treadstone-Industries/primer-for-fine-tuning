import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'ce068047-5c96-42a3-af4b-e747ecb2cb81', title: 'PATENT_TITLE_9063' },
                { id: 'b1b50778-0fa5-4c98-b8fe-ca60746beaad', title: 'PATENT_TITLE_1159' },
                { id: '68350121-fb18-450a-8a79-3fd78e7479a9', title: 'PATENT_TITLE_4276' },
                { id: '8e238b93-2c77-44f6-8e5a-a4712e05040c', title: 'PATENT_TITLE_4048' },
                { id: '0357650c-5a9c-41f5-8853-8196b130f417', title: 'PATENT_TITLE_5625' },
                { id: '381e0ec8-3bb1-4d92-a075-7ffe75c2f98d', title: 'PATENT_TITLE_6296' },
                { id: '18543edb-af44-49ec-acf6-c21a235933dd', title: 'PATENT_TITLE_4482' },
                { id: '2f649b16-21c5-4024-8544-46a188d086e1', title: 'PATENT_TITLE_2082' },
                { id: 'bab002d6-8612-48c6-8a92-a98cf19aedc4', title: 'PATENT_TITLE_9133' },
                { id: '6b92ec2a-4414-40fd-8f82-2b11a777ad7c', title: 'PATENT_TITLE_1221' },
            ]}
        />
    </Box>
)

export default App