import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '59dd674a-9290-4036-9410-ffb5fc309c05', title: 'PATENT_TITLE_9888' },
            { id: 'f9fd8f65-dabf-40cd-af2e-55035d6b991e', title: 'PATENT_TITLE_4832' },
            { id: '74efc065-f331-4d33-b780-396377b32977', title: 'PATENT_TITLE_2357' },
            { id: 'db62ecf6-5621-4815-9a7e-c28910a2233d', title: 'PATENT_TITLE_8386' },
            { id: '77db877f-a823-4ceb-aa28-0e0340193bce', title: 'PATENT_TITLE_5283' },
            { id: 'e1e686c5-9ecd-42a4-ac30-bd81773ece3a', title: 'PATENT_TITLE_9176' },
            { id: '40b8fc3b-f0df-4b21-92e9-f78cf0d9bd63', title: 'PATENT_TITLE_5446' },
            { id: '50d0a9ec-17a2-42bd-a084-b348e50832ac', title: 'PATENT_TITLE_5603' },
        ]}
    />
)

export default App