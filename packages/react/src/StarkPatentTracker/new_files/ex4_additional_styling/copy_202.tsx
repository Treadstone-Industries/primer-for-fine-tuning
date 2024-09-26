import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '855a8eb2-df77-41a1-8c73-e4c34913bc3d', title: 'PATENT_TITLE_9471' },
                { id: 'e2cab9c1-912c-4b23-b95f-87ba9d881095', title: 'PATENT_TITLE_8024' },
                { id: '287d7e24-089a-4363-b122-6133c5c6917e', title: 'PATENT_TITLE_3519' },
                { id: '6197e4b6-0c3a-486f-9759-e98b0568f7a5', title: 'PATENT_TITLE_4790' },
                { id: '146f3a99-f565-4b31-a770-0c21ba3801f8', title: 'PATENT_TITLE_9835' },
                { id: '9d539f98-9b39-4d8c-a444-2b5ee43152bd', title: 'PATENT_TITLE_8279' },
                { id: '556f8799-c44d-4a1a-95db-994b51b7102f', title: 'PATENT_TITLE_3978' },
                { id: '95ea8346-3238-4614-8967-309962239d17', title: 'PATENT_TITLE_4994' },
            ]}
        />
    </Box>
)

export default App