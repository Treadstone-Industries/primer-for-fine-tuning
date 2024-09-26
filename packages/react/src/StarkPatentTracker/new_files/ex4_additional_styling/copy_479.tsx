import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '08966d2f-1550-4b7e-812d-aac8d67022f2', title: 'PATENT_TITLE_6297' },
                { id: 'df626ede-432b-41fc-b6de-04b5f085e42d', title: 'PATENT_TITLE_1896' },
                { id: 'e84894aa-aa67-4a12-8931-f6e33998d8b4', title: 'PATENT_TITLE_7498' },
                { id: '8ba23b7b-08f6-4509-bc7c-0378b9f2f56d', title: 'PATENT_TITLE_4061' },
                { id: '35099b7d-0750-492d-9231-12bcf75b2495', title: 'PATENT_TITLE_9282' },
                { id: 'd22e44ed-7754-4142-bd11-64b6f3ec3e60', title: 'PATENT_TITLE_5393' },
                { id: 'ccc20750-f1ba-46b0-8774-b7c43a53a754', title: 'PATENT_TITLE_9240' },
                { id: 'ba43abeb-c247-48ae-a516-966ff0bc3f85', title: 'PATENT_TITLE_3832' },
                { id: '9acdfc6b-6ee0-460f-af50-12b9bb11a18b', title: 'PATENT_TITLE_2585' },
            ]}
        />
    </Box>
)

export default App