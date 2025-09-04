import { Stack, ThemeProvider, Typography } from "@mui/material";

import theme from "@/styles/theme";

export default function Sample() {
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2}>
        <Typography variant="h1">h1. Heading</Typography>
        <Typography variant="h2">h2. Heading</Typography>
        <Typography variant="h3">h3. Heading</Typography>
        <Typography variant="h4">h4. Heading</Typography>
        <Typography variant="h5">h5. Heading</Typography>
        <Typography variant="h6">h6. Heading</Typography>
        <Typography variant="display1">display1. Heading</Typography>
        <Typography variant="display2">display2. Heading</Typography>
        <Typography variant="display3">display3. Heading</Typography>
        <Typography variant="bodyXL">bodyXL. body</Typography>
        <Typography variant="bodyL">bodyL. body</Typography>
        <Typography variant="bodyDF">bodyDF. body</Typography>
        <Typography variant="bodyS">bodyS. body</Typography>
        <Typography variant="bodyNC">bodyNC. body</Typography>
        <Typography variant="500B">500B. single text</Typography>
        <Typography variant="500M">500M. single text</Typography>
        <Typography variant="500R">500R. single text</Typography>
        <Typography variant="400B">400B. single text</Typography>
        <Typography variant="400M">400M. single text</Typography>
        <Typography variant="400R">400R. single text</Typography>
        <Typography variant="300B">300B. single text</Typography>
        <Typography variant="300M">300M. single text</Typography>
        <Typography variant="300R">300R. single text</Typography>
        <Typography variant="200B">200B. single text</Typography>
        <Typography variant="200M">200M. single text</Typography>
        <Typography variant="200R">200R. single text</Typography>
        <Typography variant="100B">100B. single text</Typography>
        <Typography variant="100M">100M. single text</Typography>
        <Typography variant="100R">100R. single text</Typography>
      </Stack>
    </ThemeProvider>
  );
}
