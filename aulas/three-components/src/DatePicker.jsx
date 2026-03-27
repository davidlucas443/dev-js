import { useState } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 5px;
`;

export default function DatePicker() {
  const [date, setDate] = useState('');

  return (
    <Box>
      <label>Data:</label>
      <Input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </Box>
  );
}