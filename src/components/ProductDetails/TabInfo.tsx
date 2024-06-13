import * as React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { DescriptionDetails, ListReview } from "./ExtraInfo";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tab-${index}`}
            {...other}>
            {value === index && <>{children}</>}
        </div>
    );
}

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
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="extra-info"
                    centered>
                    <Tab label="Description" value={0} />
                    {/* <Tab label="Additional Information" value={1} /> */}
                    <Tab label="Review[num reviews]" value={1} />
                </Tabs>
            </Box>
            <Box display="flex" justifyContent={"center"}>
                <ItemsTab />
            </Box>
        </Box>
    );
}
