import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '1a05ac2c-948a-4bc3-8dc6-15585f49df03', title: 'PATENT_TITLE_3662' },
        { id: '972436ec-de3e-4207-98fa-80980c2952a4', title: 'PATENT_TITLE_4332' },
        { id: '28b2e1ee-f508-4241-a0ff-cda2a9853019', title: 'PATENT_TITLE_2427' },
        { id: 'ddfa8789-3d3a-4cd3-9310-cae77dd388bc', title: 'PATENT_TITLE_1583' },
        { id: '7cd01e1b-9bd1-4be5-9d8e-53508710d124', title: 'PATENT_TITLE_8675' },
        { id: 'c127462d-40da-46c1-9c46-74e983a50f0f', title: 'PATENT_TITLE_6580' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App