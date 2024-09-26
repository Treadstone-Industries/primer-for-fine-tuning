import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '0e99bc58-9f03-42e8-98f3-8282e376c665', title: 'PATENT_TITLE_5909' },
            { id: 'b53f33c4-e9fe-4b4c-af46-7a89ccd7094a', title: 'PATENT_TITLE_6924' },
            { id: '695eca95-51e6-46fa-8298-19f598c3a6ab', title: 'PATENT_TITLE_2271' },
            { id: '4dcb837e-9ac1-438e-9fd1-943267b5c400', title: 'PATENT_TITLE_4955' },
            { id: '99cb6251-d40a-4d14-8997-52d9f7788a3c', title: 'PATENT_TITLE_9736' },
            { id: '59621fcf-a96b-44f4-9175-04c79794f5dc', title: 'PATENT_TITLE_2463' },
            { id: '8cf77ddb-7c6a-4558-98ed-963d1f48a395', title: 'PATENT_TITLE_6347' },
            { id: 'e7c01307-e9a5-41d9-953d-66d2a15bb163', title: 'PATENT_TITLE_6361' },
        ]}
    />
)

export default App