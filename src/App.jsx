import { useState } from 'react'
import { Button } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import 'rsuite/dist/rsuite.min.css';
import './App.css'
import ModalComponent from './Components/Modal';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>{count}</div>
      <div className="card">
        <Button appearance="primary" onClick={() => setCount((count) => count + 1)}>
+1
        </Button>
        <Button appearance="primary" onClick={() => setCount((count) => count - 1)}>
-1
        </Button>
        <Button appearance="primary" onClick={() => setCount((count) => count  +2)}>
          +2
        </Button>
        <ModalComponent/>
      </div>
    </div>
  )
}

export default App
