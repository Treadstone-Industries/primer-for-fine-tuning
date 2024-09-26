import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '0d5b8e21-7061-4c7e-824c-75c45dbaec3c', title: 'PATENT_TITLE_9320' },
                { id: '597777ec-6e8b-4e01-a4f3-98fd9a13720d', title: 'PATENT_TITLE_9836' },
                { id: '8743c155-e1aa-4355-802c-e65db00b5874', title: 'PATENT_TITLE_1709' },
                { id: 'eda1949a-f33c-4086-9a69-4f34a014243b', title: 'PATENT_TITLE_7271' },
                { id: '7674f667-2eb8-4824-ad4c-4a9d5778717e', title: 'PATENT_TITLE_9031' },
                { id: '301b0428-c028-42ce-853b-4800940b1827', title: 'PATENT_TITLE_6993' },
            ]}
        />
    </Box>
)

export default App