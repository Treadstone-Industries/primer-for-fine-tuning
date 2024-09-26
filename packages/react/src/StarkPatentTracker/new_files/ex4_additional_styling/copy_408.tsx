import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '92ae841b-544b-4d26-bc96-e34fc68af0c1', title: 'PATENT_TITLE_8479' },
                { id: '06d21c18-9d51-41b7-8246-8842648941d2', title: 'PATENT_TITLE_2425' },
                { id: '3726cd2b-9e3f-475a-a285-f7df47b71444', title: 'PATENT_TITLE_6722' },
                { id: '27747a5c-dba5-4477-bc37-e90cfc843bcc', title: 'PATENT_TITLE_1832' },
                { id: '71287413-0cc4-44bc-a76d-4d54e38fc66b', title: 'PATENT_TITLE_9199' },
                { id: '9c1f89a3-4362-460f-82b7-efdda5c4faba', title: 'PATENT_TITLE_8395' },
                { id: 'cf18b7fe-7098-460a-b82d-1f7ed588d06e', title: 'PATENT_TITLE_8493' },
            ]}
        />
    </Box>
)

export default App