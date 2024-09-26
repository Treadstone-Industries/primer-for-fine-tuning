import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '80526d97-c0f7-454a-ae27-6c27b3aa648e', title: 'PATENT_TITLE_4293' },
                { id: 'adfdeb82-feb4-4b27-8b76-1a2884f5affd', title: 'PATENT_TITLE_5901' },
                { id: 'bbc2b285-9cf5-46f8-893a-163f91f6d430', title: 'PATENT_TITLE_5896' },
                { id: 'e6fe7278-62e9-4b45-b372-a3c5660dfc7d', title: 'PATENT_TITLE_7125' },
                { id: '4dfbf72d-9262-4c66-9204-5b8ad10ac79a', title: 'PATENT_TITLE_6099' },
                { id: 'da4a09db-2f8b-4964-8493-788a04b1b696', title: 'PATENT_TITLE_4488' },
                { id: '98f70573-4359-4264-a51a-86e3a3718a90', title: 'PATENT_TITLE_6158' },
                { id: '73aec4d3-29cc-4b64-8e80-b936d562420e', title: 'PATENT_TITLE_4130' },
                { id: '48adb46d-f2a3-4dc0-a42c-5f856eeb8836', title: 'PATENT_TITLE_3967' },
                { id: '72d46487-478f-47bf-bb00-da4b8413cbea', title: 'PATENT_TITLE_6248' },
            ]}
        />
    </Box>
)

export default App