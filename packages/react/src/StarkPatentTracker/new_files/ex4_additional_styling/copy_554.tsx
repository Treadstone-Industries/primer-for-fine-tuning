import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '118c41ad-caee-43f9-be09-0aca125e6e0a', title: 'PATENT_TITLE_8759' },
                { id: '49ad93b4-b11b-4d20-82bf-51c938934dc3', title: 'PATENT_TITLE_3287' },
                { id: '8a522d56-2fb7-4929-b761-f3fca5207a38', title: 'PATENT_TITLE_4736' },
                { id: '4112b700-e164-477a-bee4-d48437a04743', title: 'PATENT_TITLE_7814' },
                { id: '529bd514-f179-4751-92f5-f3e42feed028', title: 'PATENT_TITLE_5305' },
                { id: '0e94b274-4254-49dc-826a-baabb0fb59c0', title: 'PATENT_TITLE_8126' },
                { id: '18e985cc-bfb9-4e9a-b37b-280d1c3f7391', title: 'PATENT_TITLE_8491' },
            ]}
        />
    </Box>
)

export default App