import { Avatar, Stack, Typography } from "@mui/material";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import React from "react";
import moment from "moment";
function Profile() {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={"sadas sdfafdsada sdfa"} />
      <ProfileCard
        heading={"Username"}
        text={"bishal05"}
        Icon={<UserNameIcon />}
      />
      <ProfileCard heading={"Name"} text={"Bishal Saud"} Icon={<FaceIcon />} />
      <ProfileCard
        heading={"Joined"}
        text={moment("2024-01-04T18:30:00.000Z").fromNow()}
        Icon={<CalendarIcon />}
      />
    </Stack>
  );
}

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"gray"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);
export default Profile;