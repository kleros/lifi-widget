import { SwapVert as SwapVertIcon } from '@mui/icons-material';
import { Box } from '@mui/material';
import { SelectTokenButton } from '../../components/SelectTokenButton';
import { SwapButton } from '../../components/SwapButton';
import { SwapRoutes } from '../../components/SwapRoutes';
import { ElementId } from '../../utils/elements';
import { FormBox, FormContainer } from './SwapPage.style';

export const SwapPage: React.FC = () => {
  return (
    <FormContainer id={ElementId.SwapContent} disableGutters>
      <FormBox>
        <SelectTokenButton formType="from" />
        <Box
          sx={{ display: 'flex', justifyContent: 'center', height: 40 }}
          py={0.5}
        >
          <SwapVertIcon sx={{ alignSelf: 'center', padding: '0 16px' }} />
        </Box>
        <Box mb={3}>
          <SelectTokenButton formType="to" />
        </Box>
        {/* <SendToRecipientForm /> */}
        {/* <RoutePrioritySelect /> */}
        <SwapRoutes mb={3} />
      </FormBox>
      <Box px={3} pb={3}>
        <SwapButton />
      </Box>
    </FormContainer>
  );
};
