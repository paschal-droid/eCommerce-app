import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  navbar: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    boxShadow: "0 1px 10px rgb(0, 161, 157)",
    padding: "10px 40px",
    [theme.breakpoints.down('sm')]: {
      padding: "10px 20px",
    },
  },

  image: {
    background: "none",
    borderRadius: "999px",
    marginRight: "10px",
    
  },

  navLogo: {
    display: "flex",
    width: "auto",
    alignItems: "center",
  },

  navItems: {
    display: "flex",
    fontSize: "15px",
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    
  },

  item: {
    margin: "0 15px",
    lineHeight: "1.4",
    border: 0,
    transition: "all 0.2s ease",
    cursor: "pointer",
    "&:hover" : {
      color: "rgb(0, 161, 169)",
      fontWeight: "700",
    },
    [theme.breakpoints.down('sm')]: {
      margin: "0 10px",
    },
    navBtn: {
      display: "flex",
    }
  },



  // menuButton: {
  //   marginRight: theme.spacing(2),
  //   [theme.breakpoints.up('sm')]: {
  //     display: 'none',
  //   },
  // },
  // grow: {
  //   flexGrow: 1,
  // },
  // search: {
  //   position: 'relative',
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: alpha(theme.palette.common.white, 0.15),
  //   '&:hover': {
  //     backgroundColor: alpha(theme.palette.common.white, 0.25),
  //   },
  //   marginRight: theme.spacing(2),
  //   marginLeft: 0,
  //   width: '100%',
  //   [theme.breakpoints.up('sm')]: {
  //     width: 'auto',
  //   },
  // },
  // searchIcon: {
  //   padding: theme.spacing(0, 2),
  //   height: '100%',
  //   position: 'absolute',
  //   pointerEvents: 'none',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // inputRoot: {
  //   color: 'inherit',
  // },
  // inputInput: {
  //   padding: theme.spacing(1, 1, 1, 0),
  //   // vertical padding + font size from searchIcon
  //   paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  //   transition: theme.transitions.create('width'),
  //   width: '100%',
  //   [theme.breakpoints.up('md')]: {
  //     width: '20ch',
  //   },
  // },
}));