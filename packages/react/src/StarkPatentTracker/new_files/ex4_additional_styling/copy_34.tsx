import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'fe50d1b3-6f80-4a19-ab1f-53b47740655d', title: 'PATENT_TITLE_6536' },
                { id: 'd99fc7f6-a1ba-4383-a0da-436fe4812c00', title: 'PATENT_TITLE_8269' },
                { id: '9535563f-faf0-4eca-ada2-0cab31e2ae7d', title: 'PATENT_TITLE_4520' },
                { id: '36ee972b-2ec1-420d-9140-25d6abf2317a', title: 'PATENT_TITLE_1399' },
                { id: '2ed91221-1429-4005-8bf5-10dce5cc0c3f', title: 'PATENT_TITLE_8973' },
                { id: '2d8dcb8c-9b18-41e5-81be-c952a392ad53', title: 'PATENT_TITLE_8715' },
                { id: '14b6165c-d43b-47c6-b144-19d1ec83bbef', title: 'PATENT_TITLE_3757' },
            ]}
        />
    </Box>
)

export default App