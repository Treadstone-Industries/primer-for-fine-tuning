import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'f72eb358-c2af-451d-97d7-8cc05823c05d', title: 'PATENT_TITLE_8328' },
                { id: 'aaf8d5f8-fecf-4d52-b507-86b54bb416b9', title: 'PATENT_TITLE_5547' },
                { id: 'da7cd2f7-813b-437f-9591-fb8e8b59bbfd', title: 'PATENT_TITLE_8431' },
                { id: '34304c1f-d0f5-4848-ba8f-e3f644d0590e', title: 'PATENT_TITLE_8676' },
                { id: 'd35fa82f-42be-4541-9c7f-2f482c35defc', title: 'PATENT_TITLE_7554' },
            ]}
        />
    </Box>
)

export default App