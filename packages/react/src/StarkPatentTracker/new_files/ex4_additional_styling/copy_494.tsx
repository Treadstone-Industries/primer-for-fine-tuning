import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '6ec82f13-3663-479e-b7f3-5a3dfc6e9f69', title: 'PATENT_TITLE_7552' },
                { id: 'bfe0e946-c660-4096-8674-d227290dd605', title: 'PATENT_TITLE_4375' },
                { id: '465e1595-bf54-4d4a-8b33-6b072a96a56f', title: 'PATENT_TITLE_8767' },
                { id: '46e96e07-596c-4ad0-be07-c1011dc151f2', title: 'PATENT_TITLE_5572' },
                { id: '26a2598e-c91a-4051-b423-7643a4a98975', title: 'PATENT_TITLE_8296' },
                { id: '8c344da5-9a19-48f8-bcae-eaac3228ea78', title: 'PATENT_TITLE_8258' },
                { id: 'c6aca340-b3f8-419c-b473-a2350ffe77af', title: 'PATENT_TITLE_3947' },
                { id: '4a869891-821b-4f70-a235-305020a3f1bd', title: 'PATENT_TITLE_9731' },
                { id: '696cc444-8a72-42c1-8e17-6b4faa8cdd5b', title: 'PATENT_TITLE_5014' },
            ]}
        />
    </Box>
)

export default App