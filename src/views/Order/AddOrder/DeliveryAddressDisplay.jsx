import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Radio from "@material-ui/core/Radio";
import React, { Component } from "react";

const rows = [
  '"232 , xyza lane , xyza city , xyza state , NZ"',
  '"121 , abc lane , qbc city , qbc state , NZ"',
];

export default class DeliveryAddressDisplay extends Component {
  render() {
    return (
      <List>
        {rows.map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value}
              role={undefined}
              dense
              button
              //   onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Radio
                  //   checked={selectedValue === "a"}
                  //   onChange={handleChange}
                  value="a"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "A" }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={` ${value + 1}`} />
            </ListItem>
          );
        })}
      </List>
    );
  }
}
