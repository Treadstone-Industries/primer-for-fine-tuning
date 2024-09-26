import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '686518da-26c0-4fc4-be99-6825f425f929', title: 'PATENT_TITLE_4032' },
                { id: '3ec9f2f5-b340-4c85-864e-bdf2753d849f', title: 'PATENT_TITLE_9402' },
                { id: '1471ff64-5ebc-4bf3-96a7-29674691eb27', title: 'PATENT_TITLE_6243' },
                { id: 'a69fe09c-7cae-4b1f-bd3a-046108a9ad50', title: 'PATENT_TITLE_2838' },
                { id: '2c10d5dd-34f7-4eee-9723-cee367b18768', title: 'PATENT_TITLE_3372' },
                { id: '191fc5ff-7abc-44ab-89e6-30cd39cb9dc1', title: 'PATENT_TITLE_5528' },
                { id: '321473a6-eacb-45d7-a854-512ef8cf32d4', title: 'PATENT_TITLE_1685' },
                { id: '561f5088-a0ad-4dab-aa7c-93da2300f1ae', title: 'PATENT_TITLE_4743' },
            ]}
        />
    </Box>
)

export default App