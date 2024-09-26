import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0aa156d0-ee5d-4358-ba58-c44bb8869c3d', title: 'PATENT_TITLE_9034' },
        { id: '72b6dce1-a475-4538-a111-86c3d86fc7ec', title: 'PATENT_TITLE_5009' },
        { id: '8fb63892-f407-47f2-b3be-47a409310d7a', title: 'PATENT_TITLE_1048' },
        { id: 'c3b992d6-edfb-4d42-b805-92d6c63f8e36', title: 'PATENT_TITLE_6722' },
        { id: '01e975f3-1741-49f2-9891-e1015c8a1259', title: 'PATENT_TITLE_3218' },
        { id: 'c5c1d719-67bd-42f9-8ad5-8ad7bbda47ff', title: 'PATENT_TITLE_8946' },
        { id: '89b29638-fae1-416c-aef2-00b8cc1f894a', title: 'PATENT_TITLE_5444' },
        { id: '33a04db5-5fe8-4d39-96eb-d8b9ed7d7812', title: 'PATENT_TITLE_6181' },
        { id: '016c98d2-01c9-48ec-a4fa-04413789494e', title: 'PATENT_TITLE_5469' },
        { id: 'cdcdb9ce-2eae-46db-9528-f9cb943dea22', title: 'PATENT_TITLE_4006' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App