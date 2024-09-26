import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'dd19d9e3-2857-400f-969d-8e6a9bc5a9c0', title: 'PATENT_TITLE_9183' },
            { id: '874f5ea1-3473-43a5-97a1-b374106c1853', title: 'PATENT_TITLE_7054' },
            { id: '08874ee4-f302-4f1d-9691-ecff665b7468', title: 'PATENT_TITLE_1186' },
            { id: '6ba3d0fa-171f-4949-af6c-72ae7e56baa1', title: 'PATENT_TITLE_1175' },
        ]}
    />
)

export default App