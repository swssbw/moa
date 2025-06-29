import { Button, Dialog, Slide, Stack } from '@mui/material';
import { forwardRef, PropsWithChildren } from 'react';
import { TransitionProps } from '@mui/material/transitions';
import CheckIcon from '@mui/icons-material/Check';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>
) {
  return (
    <Slide
      direction='up'
      ref={ref}
      {...props}
    />
  );
});

export default function FullScreenModal({
  children,
  open,
  handleClose,
}: PropsWithChildren & {
  open: boolean;
  handleClose: () => void;
}) {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      slots={{
        transition: Transition,
      }}
      slotProps={{
        paper: {
          sx: {
            background: '#fdfbf6',
            // background: 'rgba(0, 0, 0, 0.8)',
          },
        },
      }}
    >
      <Stack
        p={5}
        height='100%'
        alignItems='center'
        justifyContent='center'
        sx={{ position: 'relative' }}
      >
        <Button
          sx={{ position: 'absolute', top: '40px', right: '40px' }}
          startIcon={<CheckIcon />}
          color='secondary'
          onClick={handleClose}
        >
          완료
        </Button>
        {children}
      </Stack>
    </Dialog>
  );
}
