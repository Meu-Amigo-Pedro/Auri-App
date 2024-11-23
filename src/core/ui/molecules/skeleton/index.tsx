import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import * as S from "../../templates/choose-place/styles";

const LoadingSkeleton = () => {
  return (
    <Stack spacing={1}>
      <S.GlobalContainer>
        <Skeleton variant="rectangular" width="100%" height="4.8rem" />

        <S.WrapperTitle>
          <Skeleton variant="text" width="28rem" height="4rem" />
          <Skeleton variant="text" width="13rem" height="2rem" />
        </S.WrapperTitle>

        <S.Container>
          <Skeleton variant="rectangular" width="28rem" height="18rem" />
          <Skeleton variant="rectangular" width="28rem" height="18rem" />
          <Skeleton variant="rectangular" width="28rem" height="18rem" />
          <Skeleton variant="rectangular" width="28rem" height="18rem" />
        </S.Container>
      </S.GlobalContainer>
    </Stack>
  );
};

export default LoadingSkeleton;
