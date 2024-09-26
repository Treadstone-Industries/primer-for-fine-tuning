import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'acfa3252-ba17-46a0-b85a-35a5e9d11d2c', title: 'PATENT_TITLE_8512' },
        { id: 'd7b9d6e3-25d7-4502-b1de-364f47bcc3d9', title: 'PATENT_TITLE_2684' },
        { id: '7ecd0df1-bd43-4a9a-a449-6e950074edb5', title: 'PATENT_TITLE_1606' },
        { id: '762f1b3f-9194-460a-adb2-912c98a28fde', title: 'PATENT_TITLE_8001' },
        { id: 'b73a7987-e78a-4525-af47-12c555ab9fb6', title: 'PATENT_TITLE_7734' },
        { id: '1a25c83c-7a63-4eb1-ab54-d6267b67fb0c', title: 'PATENT_TITLE_1535' },
        { id: '576978fa-8375-4bac-960a-6028326e6351', title: 'PATENT_TITLE_8152' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App