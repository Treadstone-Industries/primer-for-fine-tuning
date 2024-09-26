import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '77fd65bb-85f2-4784-b94f-0874de60ebe2', title: 'PATENT_TITLE_1248' },
                { id: '9f12a758-02ff-4d84-b4c7-78d197257636', title: 'PATENT_TITLE_8505' },
                { id: 'bf435f8a-a377-43ff-bab9-2cb757d92550', title: 'PATENT_TITLE_4745' },
                { id: '4318ec30-f665-4434-825c-6b8897f73be4', title: 'PATENT_TITLE_4927' },
                { id: '5392db7a-8d85-4fb1-b8e0-6a36b45c7917', title: 'PATENT_TITLE_2265' },
                { id: '6bbe951d-644f-4380-bf39-bb111099a314', title: 'PATENT_TITLE_8673' },
                { id: '2a556f82-2cc8-44e4-baeb-a2495df88135', title: 'PATENT_TITLE_6405' },
                { id: '1b769d8a-e667-4c30-a51c-640116d5e11b', title: 'PATENT_TITLE_6402' },
                { id: 'df75ffc6-7f60-4693-956e-b5c755788771', title: 'PATENT_TITLE_2046' },
            ]}
        />
    </Box>
)

export default App