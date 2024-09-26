import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '60ab973f-d276-4e5a-b89c-978e9d2f9725', title: 'PATENT_TITLE_4927' },
                { id: 'afb9efd9-4b57-47c4-a466-2e572f3d5548', title: 'PATENT_TITLE_1646' },
                { id: '5deef895-710a-4394-a514-edcd8b46f9f3', title: 'PATENT_TITLE_5291' },
                { id: 'd6202e2f-1095-44d1-b468-dde6228b97ca', title: 'PATENT_TITLE_1147' },
                { id: '51d3e0d8-dfd9-4142-813d-e1320bcb2950', title: 'PATENT_TITLE_7257' },
            ]}
        />
    </Box>
)

export default App