import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '36cb2d5c-6a83-40e3-80b2-c33734b18951', title: 'PATENT_TITLE_6108' },
                { id: 'f75d5b57-7772-4187-81f1-f01b682b0bec', title: 'PATENT_TITLE_9352' },
                { id: '9c2afb46-e1cb-49f6-8585-b25f334d70eb', title: 'PATENT_TITLE_9635' },
                { id: '2e56f514-048e-412e-a358-559403df6c54', title: 'PATENT_TITLE_1909' },
                { id: 'e5a1956a-494a-4df7-835d-d47256f80c6a', title: 'PATENT_TITLE_1956' },
                { id: 'a618cd90-c9f0-41aa-80d3-96a84259795d', title: 'PATENT_TITLE_8686' },
                { id: 'cf3e0da4-f851-461f-8c0f-62cf137e7ca6', title: 'PATENT_TITLE_3881' },
                { id: 'e9c0dfea-a29f-492b-ad72-ca675defae62', title: 'PATENT_TITLE_9178' },
            ]}
        />
    </Box>
)

export default App