import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'b3754071-e258-4a1f-8352-9509a91e84a1', title: 'PATENT_TITLE_4925' },
                { id: 'a7bef8c3-ee7c-442c-b9d2-f32132b1f4c7', title: 'PATENT_TITLE_1835' },
                { id: '1a9dffca-b33f-461b-9aaa-425cf4a0ad90', title: 'PATENT_TITLE_4359' },
                { id: 'ac367398-1595-43a5-a240-d7c86e41fa52', title: 'PATENT_TITLE_3096' },
                { id: 'd55a36cc-82ed-47da-8d86-010b006ba09a', title: 'PATENT_TITLE_8335' },
                { id: '39796e51-1419-4bff-a80f-1ba2d8097580', title: 'PATENT_TITLE_9067' },
                { id: 'ff9ab058-4db6-4872-93f6-e9b4c3aa0f11', title: 'PATENT_TITLE_7933' },
                { id: '8e421b33-b1f5-4c74-a1bb-2d5c2e405b5e', title: 'PATENT_TITLE_3078' },
                { id: 'fe457dd9-70f0-42e7-a00c-cb6053e5ecf0', title: 'PATENT_TITLE_1437' },
            ]}
        />
    </Box>
)

export default App