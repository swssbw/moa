import { Box, Paper, Typography, List, ListItem, ListItemText, Stack } from '@mui/material';

const menuItems = ['고객 관리', '평가지 관리', '재활 자료 관리', '방문 일정 조회', '인지 재활 서비스'];

export default function SideBarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack
      direction='row'
      sx={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: 240,
          height: '100%',
          backgroundColor: '#ffffff',
          boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)',
          padding: '20px 0',
          flexShrink: 0,
          overflow: 'auto',
        }}
      >
        <Stack spacing={4}>
          <Typography
            sx={{
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Moa
          </Typography>
          <List>
            {menuItems.map((text, index) => (
              <ListItem
                key={index}
                sx={{
                  padding: '10px 20px',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    cursor: 'pointer',
                  },
                }}
              >
                <ListItemText
                  primary={text}
                  sx={{
                    '& .MuiTypography-root': {
                      fontSize: '16px',
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Stack>
      </Paper>
      <Box
        sx={{
          flex: 1,
          height: '100%',
          overflow: 'auto',
          padding: '40px',
        }}
      >
        {children}
      </Box>
    </Stack>
  );
}
