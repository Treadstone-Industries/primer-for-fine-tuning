import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '25699351-12b3-4bd6-9689-233ca5c54319', title: 'PATENT_TITLE_4168' },
            { id: 'b6690aad-f577-404a-8679-bd266834654c', title: 'PATENT_TITLE_2637' },
            { id: 'a82428c0-c15a-4b54-9eec-612b38feb45a', title: 'PATENT_TITLE_1679' },
            { id: 'f5841d8a-c053-4ada-b90b-9f448b50201b', title: 'PATENT_TITLE_4787' },
            { id: '9d9c99a2-062a-47c3-af6a-dfaa7d0fed8e', title: 'PATENT_TITLE_7573' },
            { id: 'ba46ce0f-1169-43aa-9eec-559850aa5f82', title: 'PATENT_TITLE_7246' },
            { id: 'a24e1d9d-d776-4788-a2c1-827c2b52b5a3', title: 'PATENT_TITLE_8477' },
        ]}
    />
)

export default App