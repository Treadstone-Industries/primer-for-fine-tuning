import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '104f469c-118a-4048-93f1-074835df746c', title: 'PATENT_TITLE_8057' },
            { id: 'b502d2d6-9fb5-4dbc-b766-d7c579b28c6b', title: 'PATENT_TITLE_1542' },
            { id: '8e8b698c-ca76-46d0-9133-dfae21590506', title: 'PATENT_TITLE_8570' },
            { id: '0acbddb2-9078-48c0-8661-29a7a453cd8b', title: 'PATENT_TITLE_1680' },
        ]}
    />
)

export default App