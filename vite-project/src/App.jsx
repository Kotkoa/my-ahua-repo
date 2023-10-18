import { useState } from 'react'
import './App.css'
import { Title, Subtitle, Caption, Label, ListLabel, Body } from '@yaradigitallabs/ahua-react';
import { Button } from "@yaradigitallabs/ahua-react";
import { AhuaProvider } from '@yaradigitallabs/ahua-react';
import '@yaradigitallabs/ahua-react/fonts/noto-sans/font-face.css';

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <AhuaProvider>
      <div>
        <Title size="xl">Hello World</Title>
        <Subtitle>Subtitle</Subtitle>
        <Caption>Caption</Caption>
        <Label>Label</Label>
        <ListLabel>ListLabel</ListLabel>
        <Title css={{ locale: 'te' }}>మానవకుటంబమునందలి</Title>
      </div>
      <Title size="2xl">Vite + React</Title>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Body size="s">
          Edit <code>src/App.jsx</code> and save to test HMR
        </Body>
      </div>
      <Caption className="read-the-docs">
        Click on the Vite and React logos to learn more
      </Caption>
    </AhuaProvider>
  )
}

export default App
