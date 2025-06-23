'use client';

import Unresolved from '../Unresolved';
import { data as examine1 } from '@/data/examine1';
import { Stack, Checkbox, Paper, Typography } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useParams } from 'next/navigation';

export default function ADAS02() {
  const params = useParams<{ index: string }>();
  const currentIndex = parseInt(params.index);
  const data = examine1.find((item) => item.cognitiveId === currentIndex);

  if (!data) return;

  return (
    <>
      <Stack p={5}>
        <Typography variant='h5'>
          {data.cognitiveId}. {data.cognitiveName}
        </Typography>

        <Stack gap={5}>
          {data.items.map((item, idx) => (
            <Stack
              key={idx}
              gap={2}
            >
              {item.description.map((desc, idx) => (
                <Typography
                  key={idx}
                  color='text.secondary'
                >
                  {desc}
                </Typography>
              ))}

              {item.instructions.map((instruction, idx) => (
                <Stack
                  spacing={0.5}
                  key={idx}
                >
                  <Typography fontWeight='bold'>{instruction.situation}</Typography>
                  <Typography
                    sx={{
                      pl: 1,
                      borderLeft: '2px solid',
                      borderColor: 'grey.300',
                      fontStyle: 'italic',
                    }}
                  >
                    {instruction.script}
                  </Typography>
                </Stack>
              ))}

              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650 }}
                  aria-label='command table'
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>명령 지침</TableCell>
                      <TableCell
                        align='center'
                        sx={{ width: 80 }}
                      >
                        정답
                      </TableCell>
                      <TableCell
                        align='center'
                        sx={{ width: 80 }}
                      >
                        오답
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {item.content.map((con, idx) => (
                      <TableRow key={idx}>
                        <TableCell>{con.name}</TableCell>
                        <TableCell
                          align='center'
                          sx={{ width: 80 }}
                        >
                          <Checkbox />
                        </TableCell>
                        <TableCell
                          align='center'
                          sx={{ width: 80 }}
                        >
                          <Checkbox />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Unresolved data={data} />
    </>
  );
}
