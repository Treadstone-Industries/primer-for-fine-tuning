import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'dec217e0-35d4-42d7-8716-4e0610ab731d', title: 'PATENT_TITLE_8521' },
                { id: '902d7af1-04e1-40d7-b9f6-90c1365595f5', title: 'PATENT_TITLE_9932' },
                { id: '573848c7-21c7-40e9-b11e-ec142191a9f1', title: 'PATENT_TITLE_2480' },
                { id: '0d426fff-7c75-4fb9-bdc8-648a2f3741c5', title: 'PATENT_TITLE_9738' },
                { id: 'f777c82d-3d25-4278-8aab-41253cb079e8', title: 'PATENT_TITLE_3146' },
                { id: 'b677acd6-70aa-4895-8874-325e821b5e3e', title: 'PATENT_TITLE_1955' },
                { id: 'bba8841a-c512-4003-ba76-f41f3b3c52e2', title: 'PATENT_TITLE_5198' },
                { id: '3eaf50fc-04aa-4e36-afb2-bdb3c88dcfd9', title: 'PATENT_TITLE_2632' },
                { id: '36405f7f-fc59-4ee5-a348-e84f7dc3285d', title: 'PATENT_TITLE_5794' },
            ]}
        />
    </Box>
)

export default App