import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '9bbe3e38-22e1-4fb7-ab58-bea91f7c956c', title: 'PATENT_TITLE_3683' },
                { id: '14a1f25b-978f-4e72-87e6-fa07a2d19061', title: 'PATENT_TITLE_7745' },
                { id: '9da9f356-02c2-4fae-bbf6-d7b300d4ca6a', title: 'PATENT_TITLE_4059' },
                { id: '753a2fea-4b7d-412f-97f6-48106d78b1cb', title: 'PATENT_TITLE_5388' },
                { id: 'f942028b-d673-4bc3-9b75-3baeac87230c', title: 'PATENT_TITLE_1852' },
            ]}
        />
    </Box>
)

export default App