import React, { useState } from "react";
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";
import { useInputValidation } from "6pp";

function NewGroups() {
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
    );
  };

  const submitHandler = () => {};
  const groupName = useInputValidation("");
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} Width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant="h4">
          New Group
        </DialogTitle>
        <TextField
          label="Group Name"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />
        <Typography variant="body1">Members</Typography>
        <Stack>
          {members.map((user) => (
            <ListItem>
              <UserItem
                user={user}
                key={user._id}
                handler={selectMemberHandler}
              />
            </ListItem>
          ))}

          <Stack direction={"row"} justifyContent={"space-evenly"}>
            <Button variant="text" color="error" size="large">
              Cancel
            </Button>
            <Button variant="contained" size="large" onClick={submitHandler}>
              Create
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Dialog>
  );
}

export default NewGroups;
