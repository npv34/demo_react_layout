import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemText from "@mui/material/ListItemText";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import GroupIcon from '@mui/icons-material/Group';
const pathUrl = [
    {
        name: "Posts",
        url: "posts",
        icon: <ReorderIcon />
    },
    {
        name: "Accounts",
        url: "accounts",
        icon: <GroupIcon/>
    }
]

const Sidebar = ({open}) => {

    const [urlList, setUrlList] = useState(pathUrl)
    const navigate = useNavigate();
    const handleNavigate = (url) => {
        navigate(url)
    }

    return (
        <>
            <Divider />
            <List>
                {urlList.map((item, index) => (
                    <ListItem onClick={() => handleNavigate(item.url)} key={index} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {item.icon}

                            </ListItemIcon>
                            <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />

        </>
    )
}

export default Sidebar;
