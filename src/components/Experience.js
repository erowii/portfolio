import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const steps = [
  {
    label: "鑫陽鋼鐵 - 技術員",
    time: "Jun 2013 - Mar 2014",
    description: "產線設備更換，設備專案規劃，行政文書",
  },
  {
    label: "俊良貿易股份有限公司 - MIS",
    time: "Apr 2014 - May 2016",
    description:
      "螺絲貿易公司工廠的MIS，負責自動倉儲系統、伺服器、網路系統、資料庫維護⼯作以及資訊設備之管理。",
  },
  {
    label: "4PX Express Japan - 作業員",
    time: "Jun 2016 - Apr 2017",
    description:
      "為期一年的日本打工度假。工作內容為貨物入庫、打板、資訊設備異常狀況處理。",
  },
  {
    label: "無限創意科技 - 互動遊戲設計師",
    time: "Jul 2017 - Now",
    description:
      "負責遊戲前端開發、線上維運、問題排查等工作，使用CocosCreator開發老虎機、捕魚機、牌桌等遊戲，協助團隊導入新技術、製作開發工具提升團隊開發效率。",
  },
];

export function Experience() {
  const [activeStep, setActiveStep] = React.useState(0);

  const gotoStep = (i) => {
    setActiveStep(i);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container sx={{ marginTop: 5 }} maxWidth="xs">
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                onClick={() => gotoStep(index)}
                optional={
                  <Typography variant="caption">{step.time}</Typography>
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Button variant="contained" onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </Container>
  );
}
