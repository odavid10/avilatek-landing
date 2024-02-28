import { MouseEvent, useState } from "react";

// material-ui
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// project imports
import { Logo } from "./Logo";
import { UIButton } from "../buttons/Button";
import { weight } from "../weight";
import { colors } from "../colors";

const pages = ["Home", "Products", "Resources", "Pricing"];

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#FFF", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={9}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                  marginLeft: "70%",
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  sx={{ color: colors.buttonSecondary }}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  marginLeft: "40px",
                  display: { xs: "none", md: "flex" },
                }}
              >
                {pages.map((page) => (
                  <Typography
                    key={page}
                    variant="h4"
                    fontWeight={600}
                    onClick={handleCloseNavMenu}
                    color="text.secondary"
                    mx={2}
                    sx={{
                      cursor: "pointer",
                    }}
                  >
                    {page}
                  </Typography>
                ))}
              </Box>
            </Grid>
            <Grid item md={3}>
              <Box
                sx={{
                  flexGrow: 1,
                  marginLeft: "40px",
                  display: { xs: "none", md: "flex" },
                }}
              >
                <UIButton variant="text" sx={{ marginRight: 2 }}>
                  <Typography
                    variant="h4"
                    fontWeight={weight["semi-bold"]}
                    color="text.secondary"
                    textTransform={"none"}
                  >
                    Log In
                  </Typography>
                </UIButton>
                <UIButton variant="contained">
                  <Typography
                    variant="h4"
                    fontWeight={weight["semi-bold"]}
                    color="#FFF"
                  >
                    Sign Up
                  </Typography>
                </UIButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
