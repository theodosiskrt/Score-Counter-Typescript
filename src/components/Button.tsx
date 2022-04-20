import { Button as MuiButton } from "@mui/material";

interface Props {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ text, onClick, disabled = false }) => {
  return (
    <MuiButton
      disabled={disabled}
      variant="contained"
      color="primary"
      onClick={onClick}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
