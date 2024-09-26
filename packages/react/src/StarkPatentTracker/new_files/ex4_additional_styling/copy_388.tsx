import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '820ff9a7-724d-4bbb-b6be-149fb19c42e0', title: 'PATENT_TITLE_5494' },
                { id: '912747e9-6bc0-4270-9434-e833aee178a0', title: 'PATENT_TITLE_5503' },
                { id: '587d579f-cc8f-4366-86e5-ac4d4e180c2c', title: 'PATENT_TITLE_2665' },
                { id: '1f66185a-e682-45a4-8d87-b36089d822c5', title: 'PATENT_TITLE_7290' },
                { id: '7f0b5111-8388-4e2c-9782-7f6b5819b80f', title: 'PATENT_TITLE_4080' },
                { id: '478dacb6-db58-463d-bfd7-78d67bb4bff5', title: 'PATENT_TITLE_6152' },
                { id: 'bf6f30d7-2f96-4016-baca-5de17a80f363', title: 'PATENT_TITLE_4858' },
            ]}
        />
    </Box>
)

export default App