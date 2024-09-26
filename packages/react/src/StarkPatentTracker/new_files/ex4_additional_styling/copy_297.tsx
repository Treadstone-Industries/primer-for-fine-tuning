import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '53f63ada-f160-42a4-89cd-a205161ac87c', title: 'PATENT_TITLE_7339' },
                { id: 'c1218a38-f36c-4abe-8196-aee7c872bae1', title: 'PATENT_TITLE_4572' },
                { id: 'e2f9ad49-6975-4138-8d86-a2002a506530', title: 'PATENT_TITLE_2608' },
                { id: '4c248ab9-5f90-4c7e-bed2-60b710f2943a', title: 'PATENT_TITLE_5966' },
                { id: '3af8c03e-4703-4170-8889-0a21d0278d12', title: 'PATENT_TITLE_3602' },
                { id: 'e6ecc8e4-677b-4cb5-8812-11929edbf153', title: 'PATENT_TITLE_6529' },
                { id: 'e15c76ca-42c2-42cf-b5ac-807caf27de19', title: 'PATENT_TITLE_4937' },
                { id: 'edf7fe11-96c7-4274-a56a-51b77c9b7454', title: 'PATENT_TITLE_5205' },
                { id: '7cf3cdb0-cab8-4a2a-9c0e-3fe67f183992', title: 'PATENT_TITLE_9284' },
            ]}
        />
    </Box>
)

export default App