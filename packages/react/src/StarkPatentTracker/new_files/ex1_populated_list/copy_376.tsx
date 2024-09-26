import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '59093bf5-240c-4274-986f-af2e246f3d2d', title: 'PATENT_TITLE_4955' },
            { id: 'ca2c0f4d-0db9-4f69-b77a-2c12b2566048', title: 'PATENT_TITLE_2898' },
            { id: '901fb5f3-1886-4a58-9873-e1ad8db1049a', title: 'PATENT_TITLE_9535' },
            { id: '6e3b8bc2-7f90-4d7c-8a75-1142476843e0', title: 'PATENT_TITLE_1811' },
            { id: '9084e9fb-af1c-4e7b-b015-ac5186681c6b', title: 'PATENT_TITLE_8430' },
            { id: 'fac1d36c-73bd-4ee3-9916-05fa36ce65c0', title: 'PATENT_TITLE_4178' },
            { id: 'f4e5c1a3-51fb-4f74-9617-072a59d45919', title: 'PATENT_TITLE_1914' },
            { id: '68898a26-fe76-4ac0-af15-545c90c15363', title: 'PATENT_TITLE_6615' },
        ]}
    />
)

export default App