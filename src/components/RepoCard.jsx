import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { red } from "@material-ui/core/colors";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "0 auto",
    marginTop: 5,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function RepoCard({ name, owner, avatar, url_repo, owner_url, create_data }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar aria-label="recipe" src={avatar}></Avatar>}
        action={
          <Button aria-label="settings" onClick={handleClick}>
            &#8594;
          </Button>
        }
        title={name}
        subheader={"Owner: " + owner}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          Repo:{" "}
          <a href={url_repo} target="_blank" rel="noreferrer">
            {name}
          </a>
        </MenuItem>
        <MenuItem>
          Owner:{" "}
          <a href={owner_url} target="_blank" rel="noreferrer">
            {owner}
          </a>
        </MenuItem>
        <MenuItem>Created: {create_data}</MenuItem>
      </Menu>
    </Card>
  );
}

export default RepoCard;

// name, owner, avatar, url_repo, owner_url, create_data
