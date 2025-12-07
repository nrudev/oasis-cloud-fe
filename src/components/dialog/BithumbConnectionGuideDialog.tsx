import BithumbConnectionDialog from "@/components/dialog/BithumbConnectionDialog";
import InfoDialog2 from "@/components/dialog/base/InfoDialog2";
import useDialogGlobal from "@/components/dialog/useDialogGlobal";

function BithumbConnectionGuideDialog() {
  const { openDialog } = useDialogGlobal();

  const handleDownload = () => {
    const pdfUrl = "/pdf/bithumb_api_key_guide.pdf";
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <InfoDialog2
      dialogTitle="빗썸 연결"
      dialogDescription={[
        "해당 거래소를 연결하려면",
        "거래소 회원가입이 필요해요",
        "KYC 2차 인증 절차까지 완료한 후 연결해주세요.",
      ]}
      button1Title="API KEY 발급 가이드"
      button2Title="빗썸 연결"
      handleButton1Click={handleDownload}
      handleButton2Click={() => openDialog(<BithumbConnectionDialog />)}
    />
  );
}

export default BithumbConnectionGuideDialog;
