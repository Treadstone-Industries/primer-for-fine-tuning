import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3c3306ee-2dde-4834-ae2c-ea3dad4ce3b3', title: 'PATENT_TITLE_4155' },
            { id: '84e2d90f-4e74-4744-b380-11c246e44ffd', title: 'PATENT_TITLE_2445' },
            { id: 'e5ff16b4-d7f1-412f-918e-ff5c8124df89', title: 'PATENT_TITLE_2406' },
            { id: 'c3622f21-2d09-4e36-8c6f-7802963d082a', title: 'PATENT_TITLE_7202' },
            { id: '3f6f47b9-be47-4e4b-9bce-a3b6335772f0', title: 'PATENT_TITLE_4931' },
            { id: 'd9e241da-bdf3-4b87-8da9-d3db0afd8665', title: 'PATENT_TITLE_8580' },
            { id: '2fbf37bf-930a-4bb4-8fd2-0170b6607506', title: 'PATENT_TITLE_2763' },
        ]}
    />
)

export default App