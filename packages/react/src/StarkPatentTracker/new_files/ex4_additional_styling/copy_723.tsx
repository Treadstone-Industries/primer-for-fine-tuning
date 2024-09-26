import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e1370cfe-d6ea-464e-b637-f029a36fe9b4', title: 'PATENT_TITLE_2501' },
                { id: 'd57f27cf-86fd-496a-8da7-0e80f4589733', title: 'PATENT_TITLE_3977' },
                { id: 'ac9d0615-e67e-4a04-91d6-b99c997ee4a7', title: 'PATENT_TITLE_3505' },
                { id: 'd816d9c7-b080-4374-87ce-a335b74e8e85', title: 'PATENT_TITLE_5331' },
                { id: 'eb25d4f9-8ddf-4da7-aa8c-a9a69487c17c', title: 'PATENT_TITLE_3969' },
                { id: '272cfeba-06fa-4f54-8a27-2764d7c410dd', title: 'PATENT_TITLE_9328' },
                { id: '910d52cf-017f-45de-99f8-6580fab143c0', title: 'PATENT_TITLE_4042' },
                { id: 'a591be55-e361-4993-b47f-47a86a97130b', title: 'PATENT_TITLE_9530' },
                { id: 'bebe46a6-f833-4f69-8b0c-6289e3a9edcb', title: 'PATENT_TITLE_9413' },
            ]}
        />
    </Box>
)

export default App