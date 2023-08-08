import React, { useState } from 'react';
import { Box, TextField, Button, Grid } from '@mui/material';
import axios from 'axios';

const ProposalForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event: any) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: any) => {
    setContent(event.target.value);
  };

  const handleAddProposal = () => {
    // Create a data object with the form data to send to the API
    const data = {
      title: title,
      content: content,
    };

    // Make the API POST request using Axios (you can use the fetch API as well)
    axios.post('http://localhost/api/proposal-templates', data)
      .then((response) => {
        // Handle the API response here if needed
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the API request
        console.error('Error sending data to API:', error);
      });
  };

  return (
    <Box sx={{ padding: '16px', maxWidth: '600px', margin: '0 auto' }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Title"
            variant="outlined"
            placeholder="e.g. App development proposal"
            value={title}
            onChange={handleTitleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            id="outlined-textarea"
            label="Content"
            placeholder="Proposal content here"
            multiline
            rows={4}
            variant="outlined"
            value={content}
            onChange={handleContentChange}
          />
        </Grid>
        
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleAddProposal}>
            Add Proposal Template
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProposalForm;
