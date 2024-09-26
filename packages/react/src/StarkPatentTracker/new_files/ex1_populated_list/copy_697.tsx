import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3b270c23-7ea3-435c-afde-a7982ae9dd32', title: 'PATENT_TITLE_2829' },
            { id: '012e4d10-2cfa-4f16-af93-d1dc54c6d002', title: 'PATENT_TITLE_2322' },
            { id: '466f9da6-fbe0-489a-99a3-481b5e4cce9b', title: 'PATENT_TITLE_2632' },
            { id: 'ea9d43df-b5e7-403a-ab60-bfc5a3f09295', title: 'PATENT_TITLE_7797' },
            { id: 'c143afbd-c0ad-4b5e-b027-d309c8daa466', title: 'PATENT_TITLE_1592' },
            { id: 'c1ce0b57-d118-43c8-9abf-21c47f86f938', title: 'PATENT_TITLE_2369' },
            { id: 'b26b487c-70cd-40d0-a83e-460118e9661c', title: 'PATENT_TITLE_5420' },
            { id: 'a03d7fc6-a101-4bab-b433-283e4923503a', title: 'PATENT_TITLE_3007' },
        ]}
    />
)

export default App