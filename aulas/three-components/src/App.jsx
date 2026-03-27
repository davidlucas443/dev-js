import { useState } from 'react';
import Breadcrumb from './Breadcrumb';
import Modal from './Modal';
import DatePicker from './DatePicker';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <Breadcrumb />

      <br />

      <button onClick={() => setOpen(true)}>
        Abrir Modal
      </button>

      <Modal open={open} setOpen={setOpen} />

      <br /><br />

      <DatePicker />
    </div>
  );
}

