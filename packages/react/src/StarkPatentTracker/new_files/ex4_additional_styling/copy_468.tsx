import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '0fcda0d5-017e-42a0-ab3e-3d5b56f37d93', title: 'PATENT_TITLE_9994' },
                { id: '9ef9cb06-1100-4aed-aae0-c0574e28213c', title: 'PATENT_TITLE_6360' },
                { id: '29137340-07ca-4d9a-84a8-4565c2b47aa3', title: 'PATENT_TITLE_5894' },
                { id: '2b28bc46-469d-497b-bb65-c68d98e1ef2a', title: 'PATENT_TITLE_8960' },
                { id: '55c31dc9-87b4-4452-9695-c443271e6fef', title: 'PATENT_TITLE_8647' },
                { id: '97671c2f-7605-41f7-9f0a-ab69eb36bb8d', title: 'PATENT_TITLE_7083' },
                { id: '7db44f58-70fc-4d38-9f88-0b2e05d5bfd4', title: 'PATENT_TITLE_7335' },
                { id: '900ef92c-4bbc-4bf3-9a30-f18117d0f486', title: 'PATENT_TITLE_7065' },
                { id: 'f4aae4aa-f200-4c6b-a4e6-c86b711f1876', title: 'PATENT_TITLE_2301' },
                { id: '7bc3c8f2-8279-4ec3-8461-8067c9361b6f', title: 'PATENT_TITLE_6393' },
            ]}
        />
    </Box>
)

export default App