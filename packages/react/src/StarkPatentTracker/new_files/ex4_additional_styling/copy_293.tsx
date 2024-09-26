import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '558b2032-6e07-4856-84de-dd27eeb8ae69', title: 'PATENT_TITLE_3653' },
                { id: '509b00d5-ab28-41ce-bd31-3bd1d046afc6', title: 'PATENT_TITLE_6882' },
                { id: 'b6184c29-902f-4fff-b6a0-bd7a06905369', title: 'PATENT_TITLE_5765' },
                { id: '68c8d8ad-b28e-4f94-b60f-38d37231186f', title: 'PATENT_TITLE_4715' },
                { id: 'cbea77db-a29a-4596-abbf-7faec9daade4', title: 'PATENT_TITLE_8270' },
                { id: '3d9e4e14-2a73-4a8a-8934-6c8e90ee265d', title: 'PATENT_TITLE_4368' },
                { id: '184b9906-cb7f-485a-acd3-4820a4ca042b', title: 'PATENT_TITLE_6954' },
                { id: 'a1a5ec36-73b5-4d63-9830-a0b21e28327e', title: 'PATENT_TITLE_4904' },
                { id: '0728ad1c-c9df-4779-a047-b82a04967dd8', title: 'PATENT_TITLE_5765' },
                { id: '7eae79e1-d706-4a47-92e9-7334d7895a05', title: 'PATENT_TITLE_5459' },
            ]}
        />
    </Box>
)

export default App