'use client';
import React from "react";
import TableCurd from "./TableCurd";
import { Box, Button } from "@mui/material";
import MyComponent from "./MyComponentProps";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>

      <a href="#" onClick={() => setShowModal(true)}>
      Click me
    </a>
      
      {showModal ? (
       
        <>
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end', pt: 2 }}>
            <Button variant="text" color="info" onClick={() => setShowModal(false)}>
              Close
            </Button>          
          </Box>
          <MyComponent name="Alice" age={30} />
          <TableCurd/>
        </>
      ) : null}
    </>
  );
}