import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'ff1a6084-5fe7-4f7a-95df-d8c63843a749', title: 'PATENT_TITLE_9426' },
                { id: '11ba51c6-3101-4436-859b-0527ed0925bc', title: 'PATENT_TITLE_2739' },
                { id: '0899dce1-86b3-423c-9faf-48a442b56e5e', title: 'PATENT_TITLE_9994' },
                { id: '569fbbb5-3deb-4def-9e0a-7001100bad88', title: 'PATENT_TITLE_2526' },
                { id: '01ebda91-86b4-4f7a-9425-ac12ce751797', title: 'PATENT_TITLE_6456' },
                { id: 'a88330e0-250e-4fa7-a0aa-95e626400eb8', title: 'PATENT_TITLE_1768' },
                { id: '10461ad4-3163-4e40-8ec2-7072110614fe', title: 'PATENT_TITLE_2876' },
                { id: 'a7492c92-3f84-40b0-b2b9-5010e6cb5370', title: 'PATENT_TITLE_4251' },
            ]}
        />
    </Box>
)

export default App