import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '2ef06df6-1c8c-4497-ab34-a7909bf53367', title: 'PATENT_TITLE_2823' },
                { id: '4ff73711-eb10-4f20-a464-d264a01b63b9', title: 'PATENT_TITLE_1687' },
                { id: 'ca6b7dd5-1cee-47e0-b6ce-7387f9cf733e', title: 'PATENT_TITLE_4066' },
                { id: 'cc6da6d0-67cd-4182-9b02-0dd5d163c998', title: 'PATENT_TITLE_5021' },
                { id: 'cd1a7e10-636d-41a7-8240-c12e74374d1f', title: 'PATENT_TITLE_3284' },
                { id: 'a421ebf0-e707-4844-91ab-6616b2fc7cf3', title: 'PATENT_TITLE_9068' },
                { id: '924dc182-90ef-491f-a40f-a7612018812f', title: 'PATENT_TITLE_9373' },
                { id: '28c88564-b2fb-441c-a9ba-8d36647bd75c', title: 'PATENT_TITLE_7055' },
                { id: 'f659bfd7-28e1-422e-9332-71b7d8dcac0b', title: 'PATENT_TITLE_2452' },
                { id: '2e859425-9261-4944-9dbb-a2846e1cdb77', title: 'PATENT_TITLE_2793' },
            ]}
        />
    </Box>
)

export default App