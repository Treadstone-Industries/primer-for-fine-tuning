import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ea3f816d-4ed7-4f21-bc68-8c081ddcc238', title: 'PATENT_TITLE_2877' },
        { id: 'f8040f1c-e1ba-499a-8488-29320117c0aa', title: 'PATENT_TITLE_5543' },
        { id: '5d796071-f57d-4e44-be6e-44ba0eddaa81', title: 'PATENT_TITLE_6786' },
        { id: '14c45d41-a6af-4182-86ee-a258e641f772', title: 'PATENT_TITLE_1388' },
        { id: '002437a1-88a1-4276-b5ae-28ecda094376', title: 'PATENT_TITLE_5197' },
        { id: '50bd1a34-da31-4e1c-b162-6982a2041c22', title: 'PATENT_TITLE_6135' },
        { id: '10b50d99-c4d1-4a44-a812-9e38d31c23f3', title: 'PATENT_TITLE_8568' },
        { id: '77db2c2d-909e-4cd1-9139-7d980d9162a3', title: 'PATENT_TITLE_2700' },
        { id: 'cc3aa3e5-b715-46e0-b3c4-e41b94a3fc65', title: 'PATENT_TITLE_9478' },
        { id: '31384612-76cd-4a51-aa10-aa366157d945', title: 'PATENT_TITLE_5626' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App