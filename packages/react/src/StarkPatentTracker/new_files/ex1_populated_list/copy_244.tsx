import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3e1c915b-4625-4942-a3be-f674d790f07b', title: 'PATENT_TITLE_3452' },
            { id: 'd313e9c9-2c23-45a5-bb97-40223eebffd6', title: 'PATENT_TITLE_8986' },
            { id: '920bb96a-63a3-4bfb-b148-eeb11faa76fe', title: 'PATENT_TITLE_6773' },
            { id: 'af05bd80-360d-4ad4-a4a9-da7f3ceea5cc', title: 'PATENT_TITLE_3257' },
            { id: 'df1c6e93-6894-4a42-a309-5103d5c9a797', title: 'PATENT_TITLE_7821' },
            { id: 'ccb26d5d-3118-4acf-81b0-697658aa616e', title: 'PATENT_TITLE_2727' },
        ]}
    />
)

export default App