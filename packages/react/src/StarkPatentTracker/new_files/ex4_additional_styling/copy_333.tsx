import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '1f367d54-1812-47f5-b86f-f8fd0ec7247a', title: 'PATENT_TITLE_1077' },
                { id: 'a7a97fe8-df75-449a-8731-a57588b20f8d', title: 'PATENT_TITLE_4809' },
                { id: '3923e8b3-0afe-47fb-88b4-6db03a384d46', title: 'PATENT_TITLE_3735' },
                { id: 'df29ce74-c383-44bf-8dcc-f712c2822458', title: 'PATENT_TITLE_5319' },
                { id: '712d357b-6207-4971-bd4f-e7f7bf6c9644', title: 'PATENT_TITLE_2684' },
                { id: '5d058cf9-3630-4b0c-a23a-36740ef7362c', title: 'PATENT_TITLE_2818' },
                { id: 'e7c94aba-579a-492d-b841-fb5edeb98825', title: 'PATENT_TITLE_4600' },
                { id: '2d57a83a-5b31-49b7-ba7f-d3cd2644c54e', title: 'PATENT_TITLE_6580' },
                { id: '3252afb7-77af-4985-91e9-28852cabe9d9', title: 'PATENT_TITLE_4372' },
            ]}
        />
    </Box>
)

export default App