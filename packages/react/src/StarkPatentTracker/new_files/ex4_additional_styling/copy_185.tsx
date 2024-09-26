import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '272dbb6e-e510-4c83-a215-317716a02802', title: 'PATENT_TITLE_3159' },
                { id: 'c4cab691-6e9b-445a-8a16-9d5a431abb04', title: 'PATENT_TITLE_8511' },
                { id: 'f52034ba-af58-47d0-86ba-e2f38a57a543', title: 'PATENT_TITLE_2899' },
                { id: '97cee666-9edd-42ee-8d9a-afc8ef17d477', title: 'PATENT_TITLE_2256' },
                { id: 'dc791814-8a6d-4632-88c4-076ec1267979', title: 'PATENT_TITLE_9908' },
                { id: 'b1f92501-85f5-42ed-90ff-245e655e3ebe', title: 'PATENT_TITLE_9098' },
                { id: '74654c35-a082-4eef-bd5a-a780a8f3f6a4', title: 'PATENT_TITLE_4464' },
                { id: 'e4fa21b4-6ac3-40fc-9730-b1f4a4b66f00', title: 'PATENT_TITLE_3585' },
                { id: 'c2e7fc94-8e46-424e-8b3b-44fd78af73b6', title: 'PATENT_TITLE_2759' },
            ]}
        />
    </Box>
)

export default App