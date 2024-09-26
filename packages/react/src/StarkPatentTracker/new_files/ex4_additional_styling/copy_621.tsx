import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '98d8b0a1-bbc5-4148-91f2-fde7b1ef6570', title: 'PATENT_TITLE_1874' },
                { id: 'da8707a5-4e43-4a4c-9c98-efec46558fe1', title: 'PATENT_TITLE_2872' },
                { id: '91c98102-84a1-4330-9304-11c62ad40d33', title: 'PATENT_TITLE_5765' },
                { id: 'd07cb936-c196-43db-8fd2-5ffc0a11b535', title: 'PATENT_TITLE_4684' },
                { id: 'f9a4727d-3239-44e0-9699-a5ffc572c200', title: 'PATENT_TITLE_5962' },
                { id: '6c7cdb98-765c-4aa9-87fd-c104c2013ba9', title: 'PATENT_TITLE_9817' },
                { id: '97043d34-1c88-4303-8d08-816d9fc176c4', title: 'PATENT_TITLE_4567' },
            ]}
        />
    </Box>
)

export default App