import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'fd7c065c-9971-4541-ba87-a581b22fea56', title: 'PATENT_TITLE_8094' },
                { id: '1271544e-82c8-4344-9119-210d1c8ba8c1', title: 'PATENT_TITLE_6697' },
                { id: '9e8209f8-064d-4b40-89d3-f1c04d6a753f', title: 'PATENT_TITLE_4582' },
                { id: '0aa8614d-38f7-4b8a-9ab0-95833e372dd4', title: 'PATENT_TITLE_4581' },
                { id: 'f638c566-e320-45d3-93d5-f3acfe9633fd', title: 'PATENT_TITLE_8182' },
                { id: '8bccf24b-3288-4e6e-b51c-1c99ec6a2725', title: 'PATENT_TITLE_7388' },
                { id: 'f37eb180-d74c-4479-9ade-581082e3869a', title: 'PATENT_TITLE_4281' },
                { id: '3011652a-55ca-406e-8780-451a86a2e328', title: 'PATENT_TITLE_7231' },
                { id: '0dc28f63-5b25-445d-bdaf-8ba6a3e8879b', title: 'PATENT_TITLE_7407' },
            ]}
        />
    </Box>
)

export default App