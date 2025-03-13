import {
  // BarcodeScannerDialog,
  Button,
  FlexBox,
  ShellBar,
} from "@ui5/webcomponents-react";
function App() {
  return (
    <>
      {/*  @ui5/webcomponents-fiori component*/}
      <ShellBar primaryTitle="Shellbar" />
      {/*  @ui5/webcomponents component*/}
      <Button>Button</Button>
      {/*  @ui5/webcomponents-react component*/}
      <FlexBox>
        <span>FlexBox</span>
      </FlexBox>
      {/*  zxing component*/}
      {/*<BarcodeScannerDialog />*/}
    </>
  );
}

export default App;
