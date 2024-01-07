import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../../assets/logo.png";

const pages = [
  {
    id: "home",
    navItem: "Home",
  },
  {
    id: "about",
    navItem: "About",
  },
  {
    id: "services",
    navItem: "Services",
  },
  {
    id: "skills",
    navItem: "Skills",
  },
  {
    id: "projects",
    navItem: "Projects",
  },
  {
    id: "resume",
    navItem: "Resume",
  },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      sx={{ backgroundColor: "#1b1b1b", padding: "10px 0" }}
      position="fixed"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box className="hidden lg:flex items-center gap-3">
              <img className="w-16 py-2" src={logo} alt="" />
              <Typography variant="h5">
                <p className="font-semibold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#df4018] to-[#af3db8]">Mehedi</span>Script</p>
              </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
                  <Typography textAlign="center">
                    <a href={`#${page.id}`}>{page.navItem}</a>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box className="flex lg:hidden items-center gap-2 w-[50%]">
              <img className="w-10 py-2" src={logo} alt="" />
              <Typography variant="body1">
              <p className="font-semibold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#df4018] to-[#af3db8]">Mehedi</span>Script</p>
              </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <>
                <a className="text-lg font-medium mx-3" href={`#${page.id}`}>
                  {page.navItem}
                </a>
              </>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <a href="#contact">
              <button className="bg-gradient-to-r from-[#df4018] to-[#af3db8] p-[2px] rounded-lg">
                <p className="p-2 lg:px-5 lg:py-2 rounded-lg bg-[#1b1b1b] hover:bg-gradient-to-r from-[#df4018] to-[#af3db8] duration-700">
                  Contact Me
                </p>
              </button>
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
