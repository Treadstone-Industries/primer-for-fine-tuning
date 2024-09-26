import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '94c953ce-9f98-4a1d-b323-dff169449754', title: 'PATENT_TITLE_7325' },
            { id: '52cc25a3-6d54-4991-b580-f47e16db577e', title: 'PATENT_TITLE_3080' },
            { id: '59e9375b-0196-48b6-afae-198eb7cf4548', title: 'PATENT_TITLE_3414' },
            { id: 'fe97efff-0306-4e89-bbc3-91856501dd53', title: 'PATENT_TITLE_7156' },
            { id: 'acee9345-cd22-4ebf-8205-a7a28bb58a8d', title: 'PATENT_TITLE_9779' },
            { id: 'c2c2fb71-494e-464a-a8f6-307cf8c26623', title: 'PATENT_TITLE_1850' },
            { id: '0b9da772-63d4-41b4-aaa1-a6ace73288c0', title: 'PATENT_TITLE_6816' },
        ]}
    />
)

export default App