import { ButtonBase, Typography } from "@mui/material";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";
import { useGoogleLogin } from "@react-oauth/google";

import Icon from "@/components/Icon/index";
import { GA_CTA_EVENT } from "@/constants/constants";
import useSignin from "@/hooks/query/useSignin";

type GAButtonProps = {
  onSuccess: (data: { isAgree: boolean }) => void;
  // children: React.ReactNode;
  eventLabel: GA_CTA_EVENT;
} & React.HTMLAttributes<HTMLButtonElement>;

function GoogleSigninButton({ onSuccess, eventLabel }: GAButtonProps) {
  const { signinAccessTokenMutation } = useSignin();

  /*
  useGoogleOneTapLogin({
    onSuccess: credentialResponse =>
      signinCredentialMutation.mutate(credentialResponse.credential || "", {
        onSuccess: () => onClick?.(),
      }),
  });
  */
  const handleClick = useGoogleLogin({
    onSuccess: tokenResponse => {
      signinAccessTokenMutation.mutate(tokenResponse.access_token, {
        onSuccess: data => {
          onSuccess(data);
          if (!sessionStorage.getItem("loginTracked")) {
            sendGAEvent("event", eventLabel, {
              // event: eventLabel,
              method: "google",
              status: "success",
            });
            sendGTMEvent({
              event: eventLabel,
              method: "google",
              status: "success",
            });
          }
          sessionStorage.setItem("loginTracked", "true");
        },
        onError: error => {
          console.log("error on mutate: ", error);
        },
      });
    },
    onError: error => {
      console.log("error on google login: ", error);
    },
  });

  return (
    <ButtonBase
      className="flex w-fit items-center gap-4 rounded-full border-white px-7 py-4 text-white"
      sx={{
        border: "1px solid",
      }}
      onClick={() => handleClick()}
    >
      <Icon src="/google.png" width={20} height={20} />
      <Typography variant="bodyS">Google로 계속하기</Typography>
    </ButtonBase>
  );
}

export default GoogleSigninButton;
