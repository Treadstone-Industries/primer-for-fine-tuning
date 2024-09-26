import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '779d922a-fe22-48f9-904d-adef30c5223a', title: 'PATENT_TITLE_1323' },
                { id: '76aa3d74-c336-4e66-a5ce-082c7543fcb1', title: 'PATENT_TITLE_1389' },
                { id: '8ee4dde1-0f5b-4242-819b-0f3983c77a66', title: 'PATENT_TITLE_2833' },
                { id: '25a1e200-2cf2-4170-a0ba-946530b17422', title: 'PATENT_TITLE_9325' },
                { id: '0f0c9b43-dac8-4a5f-a2a7-01a9d2cf9c84', title: 'PATENT_TITLE_2610' },
                { id: '007f5242-0494-4178-b372-a0370e4ae532', title: 'PATENT_TITLE_4587' },
                { id: '80605c02-6b1a-43e7-9df1-96b00cb84ea2', title: 'PATENT_TITLE_9714' },
                { id: '49ca971a-cc64-49b4-ad08-e1c2cef3bdeb', title: 'PATENT_TITLE_1978' },
            ]}
        />
    </Box>
)

export default App