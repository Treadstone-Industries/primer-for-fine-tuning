import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e3fb074a-68dd-4cb1-bfac-2b1ab0d5ffaf', title: 'PATENT_TITLE_5711' },
                { id: 'a5312e64-35c3-40e2-ae2e-789f6683f628', title: 'PATENT_TITLE_5368' },
                { id: 'a99a2d67-f472-4ad3-8e72-10be724103a3', title: 'PATENT_TITLE_9339' },
                { id: '581d93ea-aaad-4852-bb12-3cb4d35fcc1c', title: 'PATENT_TITLE_2860' },
                { id: 'a50bbaa9-9012-4e34-b36c-1f314173b81c', title: 'PATENT_TITLE_1823' },
                { id: '48902a88-fb5c-4885-a83a-420521d1cf59', title: 'PATENT_TITLE_7001' },
                { id: '51aaba07-57cc-4c5c-a535-f4b77c1a48d9', title: 'PATENT_TITLE_9452' },
                { id: 'da79b5f3-0e3c-49e0-bf40-6a36ee33e227', title: 'PATENT_TITLE_6541' },
                { id: '28a72090-bcf1-4900-ba69-41d36787279a', title: 'PATENT_TITLE_5889' },
                { id: '9c79a6fb-1be1-414b-90c0-78d93339a190', title: 'PATENT_TITLE_1122' },
            ]}
        />
    </Box>
)

export default App