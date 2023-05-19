import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import * as React from "react";
import DataTable from "./DataTable";
import Button from "@mui/material/Button";

const PostList = () => {
    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Button variant="contained">Add new post</Button>
                    <DataTable/>
                </CardContent>

            </Card>
        </>
    )
}

export default PostList;
