import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import { Button, Checkbox, IconButton, Stack, TextField, Typography } from '@mui/material';
import { Trash } from '@phosphor-icons/react';

export const Memo: FC = () => {
  const [fieldValue, setFieldValue] = useState('');
  const [memory, setMemory] = useState<string[]>([]);
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFieldValue(e.target.value);
  };
  const handleEnter = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handlePush();
    }
  };
  const handlePush = () => {
    setMemory([...memory, fieldValue]);
    setFieldValue('');
  };

  const handleDelete = (index: number) => {
    const newMemories = memory.toSpliced(index, 1);
    setMemory(newMemories);
  };
  return (
    <>
      <Stack direction="row" spacing={1} mb={3}>
        <TextField value={fieldValue} onChange={handleChange} onKeyDown={handleEnter} />
        <Button variant="contained" onClick={handlePush}>
          {'PUSH'}
        </Button>
      </Stack>
      {memory.map((memory, index) => {
        return (
          <Stack key={memory + index} direction="row" spacing={1} alignItems="center">
            <Checkbox />
            <Typography key={index + memory}>{memory}</Typography>
            <IconButton
              onClick={() => {
                handleDelete(index);
              }}
            >
              <Trash size={16} />
            </IconButton>
          </Stack>
        );
      })}
    </>
  );
};
