import { Box, Button, Divider, Stack } from '@mui/material';

import NextLink from 'next/link';

import CustomTypography from 'src/components/custom-typography/CustomTypography';
import Image from 'src/components/image/Image';
import Scrollbar from 'src/components/scrollbar/Scrollbar';
import { FONT, ICON, MAIN } from 'src/config-global';
import useResponsive from 'src/hooks/useResponsive';
import { PATH_WALLET } from 'src/routes/paths';

export default function HistoryBox() {
  const isDesktop = useResponsive('up', 'md');
  const items = [
    {
      date: '2023-06-01',
      icon: '/assets/icons/wallets/ic_expert.svg',
      title: 'Domain Expert Reward',
      detail: '[Details]',
      value: '+Xx.00',
    },
    {
      icon: '/assets/icons/wallets/ic_withdraw.svg',
      title: 'Withdraw',
      detail: 'code',
      value: '-100.00',
      status: '[Pending]',
    },
    {
      date: '2023-06-01',
      icon: '/assets/icons/wallets/ic_attack.svg',
      title: 'Purchased Attacks',
      detail: 'code',
      value: '-100.00',
      status: '[Pending]',
    },
    {
      icon: '/assets/icons/wallets/ic_leaderboard.svg',
      title: 'From leaderboard',
      detail: '[Details]',
      value: '+50.00',
      status: 'Not claimbed yet',
    },
    {
      date: '2023-06-01',
      icon: '/assets/icons/wallets/ic_expert.svg',
      title: 'Domain Expert Reward',
      detail: '[Details]',
      value: '+Xx.00',
    },
    {
      icon: '/assets/icons/wallets/ic_withdraw.svg',
      title: 'Withdraw',
      detail: 'code',
      value: '-100.00',
      status: '[Pending]',
    },
    {
      date: '2023-06-01',
      icon: '/assets/icons/wallets/ic_attack.svg',
      title: 'Purchased Attacks',
      detail: 'code',
      value: '-100.00',
      status: '[Pending]',
    },
    {
      icon: '/assets/icons/wallets/ic_leaderboard.svg',
      title: 'From leaderboard',
      detail: '[Details]',
      value: '+50.00',
      status: 'Not claimbed yet',
    },
  ];

  return (
    <Stack>
      <CustomTypography size="xl">History</CustomTypography>
      <Stack
        direction="row"
        mx={-2.5}
        my={1}
        px={2.5}
        py={1.25}
        bgcolor="#F2F2F2"
        alignItems="center"
        justifyContent="space-between"
      >
        <CustomTypography size="sm">You have earned xxx WISDOM this month.</CustomTypography>
        <Button
          component={NextLink}
          href={PATH_WALLET.earnWIS}
          sx={{ bgcolor: '#02EED6', borderRadius: '3px', color: 'black', ...FONT.sm }}
        >
          Earn More
        </Button>
      </Stack>
      {isDesktop ? (
        <Scrollbar sx={{ height: MAIN.H_DESKTOP - 451 }}>
          <Stack mt={1.5} divider={<Divider sx={{ borderColor: '#E0E0E0', my: 1 }} flexItem />}>
            {items.map((item, idx) => (
              <HistoryItem key={idx} {...item} />
            ))}
          </Stack>
        </Scrollbar>
      ) : (
        <Stack
          mt={1.5}
          sx={{ overflowY: 'auto', height: 'calc(100dvh - 451px)' }}
          divider={<Divider sx={{ borderColor: '#E0E0E0', my: 1 }} flexItem />}
        >
          {items.map((item, idx) => (
            <HistoryItem key={idx} {...item} />
          ))}
        </Stack>
      )}
    </Stack>
  );
}

type HistoryItemProps = {
  icon: string;
  title: string;
  detail: string;
  value: string;
  status?: string;
};

function HistoryItem({ icon, title, detail, value, status }: HistoryItemProps) {
  return (
    <Box px={1.25} py={1.5}>
      <Stack direction="row" spacing={0.75} alignItems="flex-start">
        <Image src={icon} sx={{ width: ICON.SIZE.md, height: ICON.SIZE.md }} />
        <Stack alignItems="flex-start" spacing={1}>
          <CustomTypography size="lg" color="black">
            {title}
          </CustomTypography>
          <CustomTypography size="sm" fontStyle="italic" color="#828282">
            {detail}
          </CustomTypography>
        </Stack>
        <Stack alignItems="flex-end" spacing={1} flex={1}>
          <CustomTypography size="lg" color={status === 'Not claimbed yet' ? '#828282' : 'black'}>
            {value}
          </CustomTypography>
          {status && (
            <CustomTypography size="sm" fontStyle="italic" color="#828282">
              {status}
            </CustomTypography>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}
