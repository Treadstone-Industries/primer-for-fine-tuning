import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '93083ef7-cceb-4b37-8182-22c2e488220b', title: 'PATENT_TITLE_8922' },
                { id: 'f5765c65-b7da-446a-bfac-d6842bdc079f', title: 'PATENT_TITLE_8044' },
                { id: '3fdbe4e1-a21c-4230-a9e4-58d0b681f778', title: 'PATENT_TITLE_7089' },
                { id: '1b7ce547-420b-4a89-ae54-5c8e8e172b2f', title: 'PATENT_TITLE_3053' },
                { id: 'dd103803-3478-4fe0-85d9-fadb795debb9', title: 'PATENT_TITLE_6227' },
                { id: '7e9542ce-3a92-4395-bf13-4358a02129ac', title: 'PATENT_TITLE_2658' },
                { id: 'a322957e-70d6-4b7e-b2d2-0ac3a4e102f6', title: 'PATENT_TITLE_2351' },
                { id: '91d352ec-0749-4392-956b-077fc8d00ad5', title: 'PATENT_TITLE_8748' },
            ]}
        />
    </Box>
)

export default App