import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e7193015-f410-415e-8f99-e6464d778605', title: 'PATENT_TITLE_7212' },
                { id: 'f29d46ec-8f4b-41e9-a64c-9d1f4b575f07', title: 'PATENT_TITLE_4532' },
                { id: 'ea78956a-8862-424e-9375-6eb6bb860ddf', title: 'PATENT_TITLE_9861' },
                { id: 'c987af98-57ae-44ba-bc27-83f079546104', title: 'PATENT_TITLE_5632' },
                { id: '9540e75d-281c-43c1-9898-f8c9e23a98cc', title: 'PATENT_TITLE_1930' },
                { id: 'f9d5a677-c0d7-4603-9ff3-be5f550f05f1', title: 'PATENT_TITLE_7904' },
                { id: '1fbde902-efea-4624-a8c0-36e81a67530a', title: 'PATENT_TITLE_9389' },
            ]}
        />
    </Box>
)

export default App