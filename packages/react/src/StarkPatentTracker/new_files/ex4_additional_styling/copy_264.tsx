import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8b6bb7d3-998f-4259-8a56-a7262a8eaa81', title: 'PATENT_TITLE_2941' },
                { id: 'd7ada440-a08a-4e72-a2b0-a3185910a009', title: 'PATENT_TITLE_6986' },
                { id: 'd2e26b65-9174-4bb1-aeba-eed7535f3e99', title: 'PATENT_TITLE_1468' },
                { id: '1b3c0cff-7b3c-49d2-b8b4-214ba5820dc8', title: 'PATENT_TITLE_4903' },
                { id: 'fb2fe8e0-f5b9-44a1-a573-df5805ca173d', title: 'PATENT_TITLE_1068' },
                { id: '8e4c1411-622e-4365-8449-f1856e159b16', title: 'PATENT_TITLE_9635' },
                { id: 'df62a7c4-0bf6-4904-b852-16d7480161ec', title: 'PATENT_TITLE_6661' },
            ]}
        />
    </Box>
)

export default App