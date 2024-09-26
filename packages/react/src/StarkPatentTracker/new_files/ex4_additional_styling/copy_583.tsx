import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '025cd2b8-1555-4ccf-8f9f-cc0ecea450ba', title: 'PATENT_TITLE_6178' },
                { id: 'e9556411-13d8-4533-902a-21db51de30b5', title: 'PATENT_TITLE_7347' },
                { id: 'a108dfb3-c0c5-4691-a502-09f705b041fc', title: 'PATENT_TITLE_2177' },
                { id: '09814ff3-1c97-4aea-8c04-9da0f34853da', title: 'PATENT_TITLE_3340' },
                { id: '1f1605b4-baf6-4535-88dd-670d1fc4bafc', title: 'PATENT_TITLE_1397' },
                { id: '70e85923-7aac-4eba-b1da-dd7c3b5087f0', title: 'PATENT_TITLE_5504' },
            ]}
        />
    </Box>
)

export default App