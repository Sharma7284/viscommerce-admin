import React, { useEffect, useState } from "react";
import { fetchEmailTemplates } from "../../../api/apiEndpoints";
import { Box, CircularProgress, MenuItem, Select } from "@mui/material";

const SelectDropdown = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetchEmailTemplates();
        setOptions(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch options");
        setLoading(false);
      }
    };

    fetchOptions();
  }, []);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    console.log("Selected Option:", event.target.value);
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          margin: "0",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <p>{error}</p>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "300px", margin: "20px auto" }}>
      <Select
        value={selectedOption}
        onChange={handleSelectChange}
        fullWidth
        displayEmpty
        sx={{ marginBottom: 2 }}
      >
        <MenuItem value="" disabled>
          Select an option
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.subject}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default SelectDropdown;
