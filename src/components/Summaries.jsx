import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchGeminiResponse = async (constellation) => {
  const apiUrl = `/api?constellation=${constellation}`;
  const { data } = await axios.get(apiUrl);
  return data.response;
};

const ConstellationList = () => {
  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useQuery(
    ["geminiResponse", selectedConstellation], 
    () => fetchGeminiResponse(selectedConstellation), 
    {
      enabled: !!selectedConstellation,
      staleTime: Infinity,
    }
  );
};

export default ConstellationList;