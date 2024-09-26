import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'fa07545a-6afe-4762-acc1-498ad6695942', title: 'PATENT_TITLE_8581' },
                { id: '6f5ee3b8-5403-49f4-b6c5-a6981d80b9f2', title: 'PATENT_TITLE_1381' },
                { id: '34190c30-7baa-4d7b-86a6-489de51ab228', title: 'PATENT_TITLE_9660' },
                { id: '00e8a6ab-3283-4ee7-afea-1efdd6aaac57', title: 'PATENT_TITLE_5602' },
                { id: 'c08552ea-e59f-4e49-9f33-2f816d66a158', title: 'PATENT_TITLE_4045' },
                { id: '568c9d6f-11d4-4ccc-b9c4-55791b6342e2', title: 'PATENT_TITLE_1630' },
            ]}
        />
    </Box>
)

export default App