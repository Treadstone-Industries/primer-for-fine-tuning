import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '92295ea7-e084-425b-aaae-72ff8999e2c8', title: 'PATENT_TITLE_7866' },
                { id: '3403f0fb-f66f-4e0a-93d6-2e2f543cbfd7', title: 'PATENT_TITLE_9496' },
                { id: 'eafc9ce6-e561-464c-a9b2-1a860467feda', title: 'PATENT_TITLE_3185' },
                { id: '94b9f46f-4800-4c0d-9605-0b6aad3a83b5', title: 'PATENT_TITLE_3050' },
                { id: '64420a44-7418-4d87-9877-d9e64a0b50ad', title: 'PATENT_TITLE_5566' },
                { id: '041a6a34-fdd7-4bd8-be5c-2e8d176e48ad', title: 'PATENT_TITLE_4223' },
                { id: 'ca5807ad-0bfa-4709-997b-07e63ac20878', title: 'PATENT_TITLE_9021' },
                { id: 'd4822aef-ae38-4573-95ae-76fafadd68c2', title: 'PATENT_TITLE_8926' },
                { id: '15c95dc2-3835-4619-9364-cfbd0ca06136', title: 'PATENT_TITLE_5761' },
            ]}
        />
    </Box>
)

export default App