import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '0f6c09ef-6345-46a1-893c-03f6811e89cf', title: 'PATENT_TITLE_7133' },
            { id: '53a31fc2-609b-448c-b436-24b03905d5a4', title: 'PATENT_TITLE_7179' },
            { id: '58391e5f-f730-4947-809e-5c7b9dc0c505', title: 'PATENT_TITLE_4046' },
            { id: '0ce98437-5601-4aca-a5f6-4732f903ad28', title: 'PATENT_TITLE_1414' },
            { id: 'a041f61e-e252-4c8e-920a-4e01a1f9818e', title: 'PATENT_TITLE_3518' },
            { id: '16ca7064-b1f4-4d88-b60c-d628ea05658a', title: 'PATENT_TITLE_6860' },
            { id: '10f3b62c-52ed-40c2-98cd-7640602edf95', title: 'PATENT_TITLE_1535' },
            { id: 'cda208b1-2163-4934-99a2-87287ee43f50', title: 'PATENT_TITLE_4357' },
            { id: 'e5d10770-b2fc-435d-a001-7ecaccf30e7d', title: 'PATENT_TITLE_4142' },
        ]}
    />
)

export default App