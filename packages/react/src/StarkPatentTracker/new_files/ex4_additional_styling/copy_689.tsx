import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e430ee76-91d5-4b15-90b0-2dac30d834f6', title: 'PATENT_TITLE_1198' },
                { id: 'aba47756-9818-4ec4-9c6e-25ec170dc422', title: 'PATENT_TITLE_8969' },
                { id: '93472ef7-d0e8-4595-8e93-0bcdf3998eb7', title: 'PATENT_TITLE_6295' },
                { id: '2dbf7818-427f-4d33-95b4-11dc6720fdab', title: 'PATENT_TITLE_2544' },
                { id: '6b4984fe-d63b-4399-9bf2-8d4c4689e9ba', title: 'PATENT_TITLE_2360' },
                { id: '28b35e90-f100-4b46-9a11-c916042716ee', title: 'PATENT_TITLE_2444' },
                { id: '8708f0af-92f1-448c-b68e-ba578d8f389a', title: 'PATENT_TITLE_1863' },
            ]}
        />
    </Box>
)

export default App