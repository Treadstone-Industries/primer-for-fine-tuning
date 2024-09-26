import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '1dec3590-07e4-478b-b161-0250692f7c44', title: 'PATENT_TITLE_9387' },
                { id: '88136eec-acf7-40ff-9579-4ded8336a3e7', title: 'PATENT_TITLE_5441' },
                { id: 'b1eef19c-28f6-45f8-9a6b-c63276d514d5', title: 'PATENT_TITLE_2629' },
                { id: 'c0882cb3-5887-4065-bf57-5eabf3df8a71', title: 'PATENT_TITLE_3540' },
                { id: 'adfe45bd-d810-497f-b9f8-e96edba93304', title: 'PATENT_TITLE_4613' },
                { id: '2eede88f-071f-45aa-bb94-8b12216a02fb', title: 'PATENT_TITLE_7960' },
                { id: 'b01d77b6-14e2-48a5-9cb9-dd79348f31d5', title: 'PATENT_TITLE_2825' },
                { id: 'fea827cb-256f-4584-8a9c-8e00c07854a4', title: 'PATENT_TITLE_2771' },
                { id: '7bfa1f2a-ba9d-405b-94e5-1b7e64c6d019', title: 'PATENT_TITLE_1804' },
                { id: '471ddc8c-b883-48ad-bcda-66a868f8c79d', title: 'PATENT_TITLE_9097' },
            ]}
        />
    </Box>
)

export default App