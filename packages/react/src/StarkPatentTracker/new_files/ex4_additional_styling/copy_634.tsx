import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e18445c8-e9ac-4254-b6d6-93f7e4d7bec9', title: 'PATENT_TITLE_4445' },
                { id: 'eab707eb-b637-4331-ab3d-3e8e5bad756a', title: 'PATENT_TITLE_1794' },
                { id: 'c72db59c-b1f6-4bc1-bc08-c42d9d536032', title: 'PATENT_TITLE_1745' },
                { id: '1017b6fc-4e92-44f8-a44d-0e155f4d15bb', title: 'PATENT_TITLE_9930' },
                { id: '131107a2-06b0-4a4c-9ea4-9f7eb508de17', title: 'PATENT_TITLE_4837' },
                { id: '00cecb47-18a4-4328-a260-667c043de6b3', title: 'PATENT_TITLE_8277' },
            ]}
        />
    </Box>
)

export default App