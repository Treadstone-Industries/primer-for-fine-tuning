import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '9689d579-eeb6-471f-bfe4-d253eeccd4e9', title: 'PATENT_TITLE_7284' },
                { id: 'c0ff4af2-b2f7-441a-97f3-010c657c73c3', title: 'PATENT_TITLE_7617' },
                { id: 'd0c6b60e-a187-45de-b5ed-187b305ddcc4', title: 'PATENT_TITLE_6896' },
                { id: '9beabad0-798e-4053-b315-d106e1f2f602', title: 'PATENT_TITLE_7144' },
                { id: '7021dbad-5b35-4e30-bc74-7c7f279d44c5', title: 'PATENT_TITLE_7325' },
                { id: '53906598-5638-4b0f-a26b-3714c051de05', title: 'PATENT_TITLE_6240' },
                { id: '389062a9-433a-49bd-9ca6-b9284d126e4b', title: 'PATENT_TITLE_7587' },
                { id: 'bd527b70-ad16-4cbd-8505-22e05a49c2fe', title: 'PATENT_TITLE_4124' },
                { id: '80e67714-7900-40a7-b1f3-256a2da14f00', title: 'PATENT_TITLE_7332' },
                { id: 'c4a3b58e-cb60-4c73-9dd5-d2681bd761d9', title: 'PATENT_TITLE_3323' },
            ]}
        />
    </Box>
)

export default App