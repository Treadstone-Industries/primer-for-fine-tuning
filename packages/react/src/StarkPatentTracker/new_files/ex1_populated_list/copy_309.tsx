import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '217ae56a-6901-4cf2-aa45-7ab3382bea8b', title: 'PATENT_TITLE_6448' },
            { id: '7f808095-b54f-4819-b4e5-ee8dd7e1f835', title: 'PATENT_TITLE_3767' },
            { id: 'f0c1ac0d-db40-4ff7-8d1d-8ab01387d0e4', title: 'PATENT_TITLE_8870' },
            { id: '32a0b638-7fc0-4a9d-b2cb-559d40407837', title: 'PATENT_TITLE_7261' },
            { id: '58458d99-3586-4298-928e-d6619bb97695', title: 'PATENT_TITLE_7120' },
            { id: 'd7ab107c-57f6-480a-a0b7-b0c0c3d1d81f', title: 'PATENT_TITLE_4527' },
            { id: '2401dcb2-c944-4973-9ffb-03bcfd0224b9', title: 'PATENT_TITLE_9934' },
        ]}
    />
)

export default App