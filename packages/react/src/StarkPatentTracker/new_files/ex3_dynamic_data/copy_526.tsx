import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '5846f54c-3e31-4a14-b40e-261a803a4c9a', title: 'PATENT_TITLE_4394' },
        { id: '042f219b-764d-4ae3-90fd-f385ef920a1f', title: 'PATENT_TITLE_9742' },
        { id: '62f1943c-28aa-425a-974f-9ca0b2e62248', title: 'PATENT_TITLE_5653' },
        { id: '30f725fa-ea33-499f-bd88-aba8f9504f11', title: 'PATENT_TITLE_6254' },
        { id: 'ad3977b9-d0a5-4b13-9415-fc97a4962e9a', title: 'PATENT_TITLE_2414' },
        { id: 'b74d967d-208f-4097-8496-7cfcb99d32e8', title: 'PATENT_TITLE_1585' },
        { id: '9f4077ad-c68d-4056-b984-cb135242cd81', title: 'PATENT_TITLE_6701' },
        { id: '6f0c0fde-cf75-4504-90ac-8c48cbab7b82', title: 'PATENT_TITLE_3440' },
        { id: 'c7ba8815-fa51-4592-a40e-823f1569d338', title: 'PATENT_TITLE_4530' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App