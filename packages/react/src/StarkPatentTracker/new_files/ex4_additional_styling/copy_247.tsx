import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '142b8ce5-1950-44bd-b229-f06c1c58a21a', title: 'PATENT_TITLE_5466' },
                { id: '0afa9d61-74d0-435d-96d0-1014ff19b793', title: 'PATENT_TITLE_8799' },
                { id: 'a807a98a-b025-48ec-8526-6b64be71a247', title: 'PATENT_TITLE_1812' },
                { id: 'd162103b-e72b-4e46-8d52-c6fa9f32d507', title: 'PATENT_TITLE_3548' },
                { id: 'bcd967cd-9d8b-45e8-8a6e-4161c8f08ba4', title: 'PATENT_TITLE_2202' },
                { id: '5cdd3d74-caee-4eac-9577-508fb7604e76', title: 'PATENT_TITLE_1365' },
            ]}
        />
    </Box>
)

export default App