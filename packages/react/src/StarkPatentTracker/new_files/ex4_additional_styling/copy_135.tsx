import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'd1c2a2de-e30b-4a80-9421-2150657709cb', title: 'PATENT_TITLE_7232' },
                { id: '6af68376-9351-4936-9869-b6e02dbd0e16', title: 'PATENT_TITLE_7303' },
                { id: '139317e1-2d0b-45fc-a358-e80ac3f610bd', title: 'PATENT_TITLE_6408' },
                { id: '1cbaa2d8-e61d-4617-88f0-04ab7ec521ab', title: 'PATENT_TITLE_2923' },
                { id: '559d8afd-25ff-4a91-b3dd-18fe98dc48e4', title: 'PATENT_TITLE_2372' },
                { id: '60b12c88-0512-4997-9436-d902d506409d', title: 'PATENT_TITLE_5558' },
            ]}
        />
    </Box>
)

export default App