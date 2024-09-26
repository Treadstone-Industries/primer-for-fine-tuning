import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'f2921ff7-cf7f-4ed9-9353-53a074d041b9', title: 'PATENT_TITLE_1154' },
                { id: '966f48e1-11e1-40d9-8cca-078ecd7fae8f', title: 'PATENT_TITLE_4053' },
                { id: 'a061253c-432b-4e8d-92be-011baa095dff', title: 'PATENT_TITLE_7155' },
                { id: '44b62b08-d34b-495b-a9e4-262201c05b27', title: 'PATENT_TITLE_1748' },
                { id: 'd83e320a-6242-4c7b-aad6-a62c9877b5ff', title: 'PATENT_TITLE_8348' },
                { id: '18bf1604-895b-4564-872e-19fab9521a83', title: 'PATENT_TITLE_4312' },
                { id: 'afbf7ae8-83ea-41a5-9e6d-a31ec69ea2de', title: 'PATENT_TITLE_3853' },
                { id: 'ab00c6b0-3790-43cf-a2c4-8b41b9ec4122', title: 'PATENT_TITLE_4839' },
                { id: '86d5f348-7f0d-4d2d-adae-27ebff576a71', title: 'PATENT_TITLE_1793' },
            ]}
        />
    </Box>
)

export default App