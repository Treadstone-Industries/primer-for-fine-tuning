import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '8e86ae01-9004-4df2-a1c6-3ac7cca61ad0', title: 'PATENT_TITLE_6415' },
            { id: 'b2b8b64f-fb88-4cd4-934b-5fff23868e0f', title: 'PATENT_TITLE_5113' },
            { id: '5e2c6e6b-63b8-462f-8fbe-7e662282f510', title: 'PATENT_TITLE_2683' },
            { id: '61e02cc0-7319-4d90-9fde-ad51368babec', title: 'PATENT_TITLE_1280' },
            { id: 'f4803bd1-35c2-497a-8374-3680e92e698e', title: 'PATENT_TITLE_8501' },
            { id: '6215b3b8-aa45-4ab3-ad31-4fd665e560ef', title: 'PATENT_TITLE_3511' },
            { id: '57ebc6c5-56e9-4167-8e45-130e03669611', title: 'PATENT_TITLE_3530' },
        ]}
    />
)

export default App