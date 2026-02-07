import * as React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { DescriptionDetails, ListReview } from "./ExtraInfo";

// interface TabPanelProps {
//     children?: React.ReactNode;
//     index: number;
//     value: number;
// }

// function CustomTabPanel(props: TabPanelProps) {
//     const { children, value, index, ...other } = props;
//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`tab-${index}`}
//             {...other}>
//             {value === index && <>{children}</>}
//         </div>
//     );
// }

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const ItemsTab = () => {
    return (
      <>
        {value === 0 ? <DescriptionDetails /> : ""}
        {value === 1 ? <ListReview /> : ""}
      </>
    );
  };
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box maxWidth="1200px" margin="0 auto">
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="extra-info"
          textColor="inherit"
          sx={{
            "& .Mui-selected": {
              fontWeight: "bold",
            },
            marginBottom: "15px",
          }}
          centered>
          <Tab label="Description" value={0} />
          <Tab label="Review[num reviews]" value={1} />
        </Tabs>
      </Box>
      <Box display="flex" justifyContent={"center"}>
        <ItemsTab />
      </Box>
    </Box>
  );
}
