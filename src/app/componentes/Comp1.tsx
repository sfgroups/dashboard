import React, { useState } from "react";
import TextField from "@mui/material/TextField";

interface MyComponentProps {
  apiUrl: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ apiUrl }) => {
  const [value, setValue] = useState("");

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);

    // Make AJAX call
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({ newValue }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    console.log(result);
  };

  return (
    <TextField
      label="Enter a value"
      value={value}
      onChange={handleChange}
      variant="outlined"
    />
  );
};

export default MyComponent;
