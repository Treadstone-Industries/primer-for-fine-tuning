import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '69329fb3-bd9a-4022-a14a-d336bc40a2bf', title: 'PATENT_TITLE_8269' },
                { id: 'e6fab8f5-1978-45b4-b515-3513494347c7', title: 'PATENT_TITLE_2398' },
                { id: 'd6ec4b49-61f9-45ee-8fdc-081b1aab0058', title: 'PATENT_TITLE_5646' },
                { id: 'e4a8ab53-1ead-41a1-8252-33d6d0855edc', title: 'PATENT_TITLE_8553' },
                { id: '1a8e1c5b-b54c-4292-8360-759c53ba16f0', title: 'PATENT_TITLE_4860' },
                { id: '79c9edad-7d26-496c-b289-81b9e6fd4f02', title: 'PATENT_TITLE_9271' },
                { id: '413b3b25-80d5-4f57-8c4a-5c50f92667da', title: 'PATENT_TITLE_7543' },
                { id: '15423971-3423-4e6a-8848-5bed81363e3d', title: 'PATENT_TITLE_3470' },
                { id: 'c81ffc2c-c4ad-4d92-8f2c-52f4ef555053', title: 'PATENT_TITLE_7741' },
                { id: 'd3794de4-c081-47aa-8f4b-d5b3439592bf', title: 'PATENT_TITLE_3326' },
            ]}
        />
    </Box>
)

export default App