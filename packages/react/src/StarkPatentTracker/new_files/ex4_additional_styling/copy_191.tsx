import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '22c24924-8828-4cf6-8d8f-04d36bc5769e', title: 'PATENT_TITLE_6942' },
                { id: '65ebff2f-5702-41fc-a222-38111447194a', title: 'PATENT_TITLE_7077' },
                { id: '49ca5e97-5973-4a96-b633-500d20331bac', title: 'PATENT_TITLE_1738' },
                { id: '1cafc8eb-cc89-4b47-a9c7-8da2e86b7f9e', title: 'PATENT_TITLE_9843' },
                { id: '88cc786b-7232-4159-9199-1edd4b00bdfc', title: 'PATENT_TITLE_8513' },
                { id: '571dc850-e866-406f-96c7-9a4bb043634f', title: 'PATENT_TITLE_3328' },
                { id: '946a6678-2c08-4066-8791-587b86ebc3e7', title: 'PATENT_TITLE_7196' },
                { id: '7ab42c5c-6b13-4362-b148-adf8609d9a73', title: 'PATENT_TITLE_7621' },
            ]}
        />
    </Box>
)

export default App