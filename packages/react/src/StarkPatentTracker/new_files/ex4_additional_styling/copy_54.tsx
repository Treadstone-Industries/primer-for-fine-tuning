import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '50e671d7-19f0-4d40-8859-7fde4db7e0df', title: 'PATENT_TITLE_2761' },
                { id: 'eac62d3c-57f0-4091-a372-6ca1cd3087d1', title: 'PATENT_TITLE_5969' },
                { id: '6fce6fce-883c-4df2-b4f3-b616ef0c9b6e', title: 'PATENT_TITLE_4073' },
                { id: 'c99fb42a-e8bd-4242-865c-b3bd8ce7797f', title: 'PATENT_TITLE_4642' },
                { id: '542f6beb-a4ac-4083-9329-b4acb0e0f9c9', title: 'PATENT_TITLE_9449' },
                { id: 'd885b1bb-7a6a-4d3e-ab4a-265b2f2d3ec6', title: 'PATENT_TITLE_6575' },
                { id: '62d89740-3774-474e-b9a0-31f9929877bb', title: 'PATENT_TITLE_1427' },
                { id: 'e920c158-c6e7-4177-832f-f3899c0edd78', title: 'PATENT_TITLE_6009' },
                { id: '09c87779-7535-44b6-8882-b9cbd06f8354', title: 'PATENT_TITLE_6048' },
            ]}
        />
    </Box>
)

export default App