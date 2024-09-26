import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '762932b7-70e1-43b1-9119-a266020b9f3c', title: 'PATENT_TITLE_2860' },
                { id: '892fa62c-406c-4124-a22a-340e8a0bce86', title: 'PATENT_TITLE_9169' },
                { id: '20ef427e-5605-4f46-8e3c-7ebf3b52fd83', title: 'PATENT_TITLE_6076' },
                { id: '37f3c0c1-8a9f-4855-b87b-1bc7fd4a54c4', title: 'PATENT_TITLE_3742' },
                { id: '9ee8cd10-740b-4b4e-9a98-2dd462f57f0d', title: 'PATENT_TITLE_8231' },
                { id: '3a90335c-1bdd-4b0c-b5b3-3a28a2560c47', title: 'PATENT_TITLE_2992' },
                { id: '80ed62bc-a6d2-4a92-8e37-804c39ef95fb', title: 'PATENT_TITLE_9618' },
                { id: '23634ada-78a1-4f11-a587-3e2618932bf5', title: 'PATENT_TITLE_4185' },
                { id: 'c3ccc0eb-8409-4d15-bd6c-7471fdf73229', title: 'PATENT_TITLE_4930' },
                { id: '0a46858b-f785-4101-975f-891dc1702713', title: 'PATENT_TITLE_7275' },
            ]}
        />
    </Box>
)

export default App