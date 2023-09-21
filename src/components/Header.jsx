import { AppBar, Container, Toolbar } from "@mui/material";

function Header() {
  return (
    <AppBar style={{marginBottom:"50px"}}position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Header;