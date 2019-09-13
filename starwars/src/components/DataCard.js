import React from "react";
import { Card } from "semantic-ui-react";
import { Box } from "./Styles";

const DataCard = props => {
    return (
        <Card>
            <Box>
                Name: {props.name}
                <br></br>
                Gender: {props.gender}
            </Box>
        </Card>
    )
}

export default DataCard;