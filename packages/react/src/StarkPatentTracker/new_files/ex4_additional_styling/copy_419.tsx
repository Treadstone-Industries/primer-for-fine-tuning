import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '1dcb9fdc-867c-4d6f-840c-ad243b6f4431', title: 'PATENT_TITLE_1166' },
                { id: '5c59ba17-22ab-4bd6-92fc-4246e4fba2f3', title: 'PATENT_TITLE_3255' },
                { id: 'd2cb9eca-42a3-4ef1-b091-5f18824075f0', title: 'PATENT_TITLE_7447' },
                { id: '1da1c59c-32ef-4ae2-b407-72e6a5f1fde2', title: 'PATENT_TITLE_8018' },
                { id: '836cbd68-1079-44c4-9c95-0c1cf9af31d6', title: 'PATENT_TITLE_6761' },
                { id: '1c9b460d-7429-4b36-887e-f4ab57415ea9', title: 'PATENT_TITLE_4871' },
                { id: '39a24b3b-55d7-4e52-809d-fd848c0a12c7', title: 'PATENT_TITLE_3459' },
                { id: '388bb7ac-4b5c-4215-ba78-e7e83a0d6ace', title: 'PATENT_TITLE_5856' },
            ]}
        />
    </Box>
)

export default App