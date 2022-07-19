import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomButton = styled(MuiButton)(
  ({ theme }) => `
  background-color: ${theme.palette.primary.main}
`
);

export const Button = () => {
  return <CustomButton>Hello</CustomButton>;
};
