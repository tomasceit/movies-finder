import * as React from "react";
import "./SearchBar.css";
import { styled, alpha } from "@mui/material/styles";
import { IconButton, InputBase } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 1),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "10ch",
      "&:focus": {
        width: "20ch",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "0ch",
      "&:focus": {
        width: "15ch",
      },
    },
  },
}));

const SearchBar = () => {
  const [state, setstate] = React.useState("");
  const navigate = useNavigate();
  const handleSearch = (evt) => {
    setstate(evt.target.value);
  };
  const onSearch = (evt) => {
    evt.preventDefault();
    if (state !== "") {
      navigate(`/search=${state}`);
    }
  };

  return (
    <form onSubmit={onSearch}>
      <Search>
        <IconButton type="submit" onClick={onSearch} sx={{ color: "white" }}>
          <SearchRoundedIcon />
        </IconButton>
        <StyledInputBase
          type="search"
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={handleSearch}
        />
      </Search>
    </form>
  );
};

export default SearchBar;
