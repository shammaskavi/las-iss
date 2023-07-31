import React, { useContext, useState } from "react";
import { Box, Card, Flex, Heading, Text, Button } from "rebass";
import { Input } from "@rebass/forms";
import { DataContext } from "./context/DataContent";
import { MagnifyingGlass } from "react-loader-spinner";

const HomePage = () => {
  const { data } = useContext(DataContext);
  const [searchId, setSearchId] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearchChange = (event) => {
    const inputId = event.target.value;
    setSearchId(inputId);

    if (!inputId) {
      setSearchResult(null);
    } else {
      const filtered = data.filter(
        (item) => item.usn.toLowerCase() === inputId.toLowerCase()
      );
      const count = filtered.length;
      setSearchResult({ data: filtered, count });
    }
  };

  const rewardStudent = () => {
    console.log("make the link and add it here");
  };

  return (
    <Box p={4} className="card-container">
      <Input
        className="input-bar"
        id="usn-input"
        type="text"
        placeholder="Enter ID to search"
        value={searchId}
        onChange={handleSearchChange}
      />
      {searchResult ? (
        searchResult.data.length > 0 ? (
          <Card
            width={250}
            m={2}
            p={3}
            className="card"
            sx={{ borderRadius: "15px" }}
          >
            <div
              className="mt-3 mb-4"
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
              }}
            >
              <img
                src="https://cdn.discordapp.com/attachments/1121100423818907739/1134027557168238712/absurd.design_-_Chapter_1_-_05.png"
                alt="Profile"
                className="rounded-circle"
                style={{ width: "100px" }}
              />
            </div>
            <Heading fontSize={2}>
              <strong>Name:</strong> {searchResult.data[0].name}
            </Heading>
            <Text>
              <strong>USN:</strong> {searchResult.data[0].usn}
            </Text>
            <Text>
              <strong>Department:</strong> {searchResult.data[0].department}
            </Text>
            <Text>
              <strong>Score:</strong> {searchResult.count}
            </Text>
            <Flex justifyContent="center" mt={3}>
              <Button onClick={rewardStudent} style={{ color: "black" }}>
                Reward Student
              </Button>
            </Flex>
          </Card>
        ) : (
          <div className="no-result">
            <img
              className="Header-img"
              src="https://cdn.discordapp.com/attachments/1121100423818907739/1134803134292688927/absurd.design_-_Chapter_1_-_09.png"
              alt="Laurel shit"
              height={200}
            />
            <Heading>Make a Meaningful Search</Heading>
          </div>
        )
      ) : null}
    </Box>
  );
};

export default HomePage;
