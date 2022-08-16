import Stack from "@mui/material/Stack";

export default function UnknownPage() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", height: "98vh" }}
    >
      <h1 style={{ fontSize: "80px", marginBottom: 0, letterSpacing: "1px" }}>404</h1>
      <h2>Nothing Here</h2>
    </Stack>
  );
}
