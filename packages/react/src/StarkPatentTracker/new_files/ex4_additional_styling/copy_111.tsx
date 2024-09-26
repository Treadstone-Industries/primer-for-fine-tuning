import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'bb414a62-3887-4e91-9ac6-d14ab1edc81d', title: 'PATENT_TITLE_9598' },
                { id: '38348ebd-b8e6-49d4-9b7a-2d8170c797be', title: 'PATENT_TITLE_1130' },
                { id: '7a85d51d-c8a6-46bf-9626-61e1e5aa150b', title: 'PATENT_TITLE_7441' },
                { id: '0c529caf-05fd-4fdc-ad07-d684d58accb8', title: 'PATENT_TITLE_8790' },
                { id: '09338c85-8a91-45e8-91bf-3badb74064e3', title: 'PATENT_TITLE_8309' },
                { id: '0b3e412a-c36f-4ea5-986d-fe7f4237f1a9', title: 'PATENT_TITLE_1282' },
                { id: '162c137f-6808-4e40-836c-fa052c6a0604', title: 'PATENT_TITLE_2369' },
                { id: '2363a800-be33-4989-bfcf-cae7a2d6fce0', title: 'PATENT_TITLE_6317' },
                { id: 'ec7b8db6-5b68-459a-a050-19cc89b11e92', title: 'PATENT_TITLE_7786' },
            ]}
        />
    </Box>
)

export default App