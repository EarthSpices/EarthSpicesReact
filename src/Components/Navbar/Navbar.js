import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo.jpg";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

function Navbar() {
  const navigate = useNavigate();
  const pathName = window.location.pathname;
  console.log("pathName", pathName === "/");
  const [showIcon, setShowIcon] = useState(false);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[{name:"Home",navigate:"/"}, {name:"About Us",navigate:"/About-us"}, {name:"Products",navigate:"/Products"}, {name:"Contact us",navigate:"/Contact-us"}].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText className={`${
                      pathName === text.navigate ? "nav-active" : ""
                    }`} primary={text?.name} onClick={()=> navigate(text.navigate)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  useEffect(() => {
    const handleResize = () => {
      setShowIcon(window.innerWidth <= 990);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener on component unmount
    };
  }, []);
  return (
    <>
      <aside class="sigma_aside">
        <div class="sigma_close aside-trigger">
          <span></span>
          <span></span>
        </div>
        <div class="sigma_logo-wrapper">
          <a class="sigma_logo" href="#" onClick={() => navigate("/")}>
            {/* <img
              src={logo}
              alt="logo"
              className="logoradious"
              style={{ borderRadius: "10px" }}
            /> */}
          </a>
        </div>
        <ul class="navbar-nav">
          <li class="menu-item menu-item-has-children">
            <a href="#">Home pages</a>
            <ul class="sub-menu">
              <li class="menu-item">
                <a href="index.html">Home 1</a>
              </li>
              <li class="menu-item">
                <a href="home-2.html">Home 2</a>
              </li>
            </ul>
          </li>
          <li class="menu-item menu-item-has-children">
            <a href="#">Pages</a>
            <ul class="sub-menu">
              <li class="menu-item">
                <div href="#" onClick={() => navigate("About-us")}>
                  About us
                </div>
              </li>
              <li class="menu-item">
                <a href="login.html">Login</a>
              </li>
              <li class="menu-item">
                <a href="signup.html">Signup</a>
              </li>
            </ul>
          </li>
          <li class="menu-item menu-item-has-children">
            <a href="#">Shop</a>
            <ul class="sub-menu">
              <li class="menu-item">
                <a href="shop.html">Shop</a>
              </li>
              <li class="menu-item">
                <a href="product-details.html">Product details</a>
              </li>
              <li class="menu-item">
                <a href="cart.html">Cart</a>
              </li>
              <li class="menu-item">
                <a href="wishlist.html">Wishlist</a>
              </li>
              <li class="menu-item">
                <a href="checkout.html">Checkout</a>
              </li>
            </ul>
          </li>
          <li class="menu-item menu-item-has-children">
            <a href="blog.html">Blog</a>
            <ul class="sub-menu">
              <li class="menu-item">
                <a href="blog.html">Blog</a>
              </li>
              <li class="menu-item">
                <a href="blog-details.html">Blog details</a>
              </li>
            </ul>
          </li>
          <li class="menu-item">
            <a href="contact-us.html">Contact us</a>
          </li>
        </ul>
      </aside>
      <div class="sigma_aside-overlay aside-trigger"></div>
      <header class="sigma_header style-1 can-sticky">
        <div class="sigma_header-middle">
          <div class="container">
            <div class="navbar">
              <div class="sigma_logo-wrapper">
                <a class="sigma_logo" href="#" onClick={() => navigate("/")}>
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <ul class="navbar-nav">
                <li class="menu-item menu-item-has-children">
                  <a
                    href="#"
                    className={`${pathName === "/" ? "nav-active" : ""}`}
                  >
                    <div onClick={() => navigate("/")}>Home</div>
                  </a>
                  {/* <ul class="sub-menu">
                                        <li class="menu-item">
                                            <a href="index.html">Home 1</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="home-2.html">Home 2</a>
                                        </li>
                                    </ul> */}
                </li>
                <li class="menu-item menu-item-has-children">
                  <a
                    href="#"
                    className={`${
                      pathName === "/About-us" ? "nav-active" : ""
                    }`}
                    onClick={() => navigate("/About-us")}
                  >
                    About Us
                  </a>
                  {/* <ul class="sub-menu">
                                        <li class="menu-item">
                                            <a href="#" onClick={() => navigate("About-us")}>About us</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="login.html">Login</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="signup.html">Signup</a>
                                        </li>
                                    </ul> */}
                </li>
                <li class="menu-item menu-item-has-children">
                  <a
                    href="#"
                    className={`${
                      pathName === "/Products" ? "nav-active" : ""
                    }`}
                    onClick={() => navigate("/Products")}
                  >
                    Products
                  </a>
                  <ul class="sub-menu">
                    {/* <li class="menu-item">
                      <a href="#" onClick={() => navigate("/Products")}>
                        Products
                      </a>
                    </li> */}
                    <li class="menu-item">
                      <a href="/Products?category=Spices">Spices</a>
                    </li>
                    <li class="menu-item">
                      <a href="/Products?category=PowderSpices">Powder Spices</a>
                    </li>
                    <li class="menu-item">
                      <a href="/Products?category=OilSeeds">Oil Seeds</a>
                    </li>
                    <li class="menu-item">
                      <a href="/Products?category=Dehydrated">Dehydrated</a>
                    </li>
                    <li class="menu-item">
                      <a href="/Products?category=Fruits">Fruits</a>
                    </li>
                  </ul>
                </li>
                {/* <li class="menu-item menu-item-has-children">
                                    <a href="#" className={`${pathName === "/Gallary" ? 'nav-active' : ""}`} onClick={() => navigate("Gallary")}>Gallary</a>
                                </li> */}
                <li class="menu-item">
                  <a
                    href="#"
                    className={`${
                      pathName === "/Contact-us" ? "nav-active" : ""
                    }`}
                    onClick={() => navigate("Contact-us")}
                  >
                    Contact us
                  </a>
                </li>
              </ul>
              <div class="sigma_header-controls style-1">
                <div id="google_translate_element"></div>
              </div>
              {showIcon && (
                <div>
                {/* Clicking on this div will open the drawer */}
                <div onClick={toggleDrawer(true)}>
                  <i className="fal fa-bars"></i>
                </div>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                  {DrawerList}
                </Drawer>
              </div>
              )}
              {/* Drawer content */}
            </div>
          </div>
        </div>
      </header>
      <div class="search-form-wrapper">
        <div class="search-trigger sigma_close">
          <span></span>
          <span></span>
        </div>
        <form class="search-form" method="post">
          <input type="text" placeholder="Search..." value="" />
          <button type="submit" class="search-btn">
            <i class="fal fa-search m-0"></i>
          </button>
        </form>
      </div>
    </>
  );
}

export default Navbar;
