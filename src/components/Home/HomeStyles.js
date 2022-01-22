import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        position: "relative",
    },
    containerImage: {
        width: '100%',
        height: "100%",
        objectFit: "cover",
        position: "absolute",
        zIndex: -1,
    },
    containerHead: {
        padding: '15% 5%',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '5%',
        },
    },
    gridHeader: {
        color: "white",
        fontWeight: "700",
        lineHeight: "1.4",
        [theme.breakpoints.down('sm')]: {
            padding: "0 5%", 
        },
        [theme.breakpoints.down('xs')]: {
            padding: "0 20px",
            fontSize: "30px"

        },
    },
    gridButton: {
        fontSize: "12px",
        marginTop: 30,
        padding: "10px 30px",
        fontWeight: "100",
        color: "rgb(224, 93, 93)",
        borderRadius: 0,
        backgroundColor: "white",
        boxShadow: "0 1px 10px rgb(224, 93, 93)",
        "&:hover": {
            backgroundColor: "rgb(224, 93, 93)",
            color: "white",
        },

    },
    outfitGrid: {
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.down('md')]: {
        },
    },
    content: {
        flexGrow: 1,
        
    },
    toolbar: theme.mixins.toolbar,
    catalogContainer: {
        textAlign: "center",
        width: "100%",
        padding: "0 50px",
    },
    catalogImageContainer: {
        position: "relative",

    },
    catalogImage: {
        width: "220px",
        height: "225px",
    },
    productTitle: {
        fontSize: "25px",
        fontWeight: "700",
        color: "rgb(35, 31, 32)",
        paddingBottom: "15px 0", 
    },
    productCaption: {
        width: "60%",
        color: "hsl(210, 10%, 33%)",
        [theme.breakpoints.down('xs')]: {
            width: '20%',
            padding: '0 20px'
        },
        paddingBottom: "15px",
        fontStyle: "italic",
    },
    productButton: {
        color: "rgb(35, 31, 32)",
        textTransform: "capitalize",
        fontWeight: "700",
        fontSize: '10px',
        paddingBottom: "15px",
    },
    
}))