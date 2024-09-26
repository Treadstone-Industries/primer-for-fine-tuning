import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ba5d159a-988b-44f0-a645-9b9b5447a9b4', title: 'PATENT_TITLE_8699' },
        { id: 'f069d107-1db9-4108-9e4d-034703ad66ec', title: 'PATENT_TITLE_9464' },
        { id: '5963f4ab-dbfc-43b4-b717-7c1235a9a131', title: 'PATENT_TITLE_2535' },
        { id: '8157370a-751e-438e-8b22-a3f39ecb78ad', title: 'PATENT_TITLE_7201' },
        { id: 'bf92e8e7-da37-4e46-b5ae-f2d60cff3b85', title: 'PATENT_TITLE_3874' },
        { id: 'c31be3ff-2c4b-40db-b021-0dcaddea45f2', title: 'PATENT_TITLE_7106' },
        { id: '7dab1dc4-ac27-4345-847a-7824fca4436d', title: 'PATENT_TITLE_5755' },
        { id: 'd464c9a9-28da-4146-8f39-1f5e636f0ca3', title: 'PATENT_TITLE_4342' },
        { id: 'e07e2216-0374-4319-b237-72156e9466b9', title: 'PATENT_TITLE_5918' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App