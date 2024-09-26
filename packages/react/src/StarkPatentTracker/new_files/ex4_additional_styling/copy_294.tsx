import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '99cec376-b625-4e55-8795-ec1fab966546', title: 'PATENT_TITLE_2632' },
                { id: 'de353b6e-a6f6-4073-8846-1bc4686eeaa8', title: 'PATENT_TITLE_7084' },
                { id: 'c2307eee-8884-4507-b28b-3ac12d476f00', title: 'PATENT_TITLE_6301' },
                { id: 'd7111cb8-02be-4be5-8fc0-6a6a63386074', title: 'PATENT_TITLE_1802' },
                { id: '237fc448-ab26-4446-bffe-bc6e77d13fe6', title: 'PATENT_TITLE_5439' },
                { id: '147900ff-b0ac-430c-9412-7642ff95b9cb', title: 'PATENT_TITLE_9240' },
                { id: '78976ebf-c85f-4de9-9fcd-550398c6740c', title: 'PATENT_TITLE_4148' },
                { id: 'f2614c93-2782-4eb3-aff9-df854956a488', title: 'PATENT_TITLE_4744' },
                { id: '6214a407-300e-458a-8426-c9b40eac742b', title: 'PATENT_TITLE_3045' },
            ]}
        />
    </Box>
)

export default App