import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '633804ed-1bff-4efc-b8a8-aa37ae20e072', title: 'PATENT_TITLE_6921' },
            { id: '9ff58adf-cdb2-4b51-b205-87741342f2dc', title: 'PATENT_TITLE_6569' },
            { id: '0d29d310-692c-4013-9f95-b4fd33896141', title: 'PATENT_TITLE_2001' },
            { id: '6a3d21d0-0523-44c0-b291-703d18c80b1f', title: 'PATENT_TITLE_1175' },
            { id: 'df1d9ea8-cfee-49b3-bcf8-88642b472dd7', title: 'PATENT_TITLE_7411' },
        ]}
    />
)

export default App