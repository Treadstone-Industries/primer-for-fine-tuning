import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '5b5f5924-60b4-4681-9fd0-163a8320f8f0', title: 'PATENT_TITLE_8331' },
                { id: 'efd70879-3270-4c2c-98e5-ec6cccd47c09', title: 'PATENT_TITLE_3469' },
                { id: '416a2917-9a41-4a3e-bbf4-f8cf55156ed4', title: 'PATENT_TITLE_9080' },
                { id: 'bc424a76-0d23-4e4d-bbc2-bdec1c2ead10', title: 'PATENT_TITLE_7659' },
                { id: '75eaeca2-a079-4a52-a906-df3ff0dacda8', title: 'PATENT_TITLE_7158' },
                { id: '85299b89-41f6-4c8e-a8c6-2a89649a3f47', title: 'PATENT_TITLE_2877' },
                { id: 'ec997c5c-0046-404e-bbd0-d61948d791c0', title: 'PATENT_TITLE_3672' },
                { id: 'e6ae170f-b9d8-43ea-9a9c-9b9b0d767004', title: 'PATENT_TITLE_8889' },
            ]}
        />
    </Box>
)

export default App