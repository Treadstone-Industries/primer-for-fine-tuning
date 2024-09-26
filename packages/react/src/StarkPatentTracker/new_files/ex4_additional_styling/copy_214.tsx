import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'be3fff8f-2a43-4f93-b0dc-69acde32b527', title: 'PATENT_TITLE_8699' },
                { id: 'd4cba8a8-972b-4529-a946-e044a9e9cd55', title: 'PATENT_TITLE_5126' },
                { id: 'c5ecdc8b-e825-4fa7-ac87-26aaafbd9ce3', title: 'PATENT_TITLE_3800' },
                { id: '5c52fe5c-994d-4763-830c-837847d57e64', title: 'PATENT_TITLE_3882' },
                { id: '9bd65128-6fa3-4e29-858a-0485a5e850b6', title: 'PATENT_TITLE_4637' },
                { id: '4424ee85-eed0-4980-b38b-814fe28a469e', title: 'PATENT_TITLE_3790' },
                { id: '1b67fd30-6ca3-4fc5-866d-31e44f283100', title: 'PATENT_TITLE_6145' },
                { id: '1d9de7ce-78f1-4dfd-a980-2f4e82d0e5e4', title: 'PATENT_TITLE_2924' },
            ]}
        />
    </Box>
)

export default App