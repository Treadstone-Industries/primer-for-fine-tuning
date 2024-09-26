import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b6be7ebd-c403-4732-85e1-56c2d2c433a8', title: 'PATENT_TITLE_9360' },
            { id: 'cb13f6ba-a517-4856-ae1e-e624607b3dae', title: 'PATENT_TITLE_9811' },
            { id: 'aa8de50b-b757-4ab9-879c-ff038a6fff05', title: 'PATENT_TITLE_7730' },
            { id: '653f7fa9-8380-4415-90ae-17db18d78800', title: 'PATENT_TITLE_7549' },
            { id: 'f345ef31-dae2-4b20-a7f2-7a2620cc2b19', title: 'PATENT_TITLE_8723' },
            { id: '0b1766b8-5600-4dfd-9015-08e155f7e435', title: 'PATENT_TITLE_4561' },
            { id: '1d094987-0624-43d0-9223-1ea573730da3', title: 'PATENT_TITLE_5276' },
            { id: '1784165e-ca22-41e9-9abd-9901bbb9f027', title: 'PATENT_TITLE_1174' },
        ]}
    />
)

export default App