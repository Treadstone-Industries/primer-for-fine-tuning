import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '01c3f96b-a0b5-4070-9f59-3377bea533b5', title: 'PATENT_TITLE_6891' },
        { id: '4c008c12-d2d6-41b0-be1f-11905cc8d72c', title: 'PATENT_TITLE_4064' },
        { id: '5a8ea890-6104-4c58-9eb6-3bb396ed4751', title: 'PATENT_TITLE_9156' },
        { id: 'b9116fbc-293a-474b-b266-f8d3f3ab8673', title: 'PATENT_TITLE_5396' },
        { id: 'f94ccc4b-a5c5-49b3-bee6-d60cb649ff23', title: 'PATENT_TITLE_9877' },
        { id: '473f2c90-828a-4e4f-b9a6-7210796d1c96', title: 'PATENT_TITLE_7656' },
        { id: 'c507bf0d-1914-482c-9f6f-e4445c035ec5', title: 'PATENT_TITLE_3155' },
        { id: '23b0b0fe-f827-47fc-87de-cb46fac733a2', title: 'PATENT_TITLE_3682' },
        { id: '2f3155fb-9008-410e-9acc-56b50b3d9407', title: 'PATENT_TITLE_8321' },
        { id: 'f2a38e1e-5883-4f83-a02b-b351fb289d7b', title: 'PATENT_TITLE_5419' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App